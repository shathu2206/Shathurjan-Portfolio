import {readFile,access} from 'node:fs/promises';
import {resolve,sep} from 'node:path';

const unescape=value=>value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[0-9a-f]+);/gi,entity=>{
  const named={'&amp;':'&','&quot;':'"','&apos;':"'",'&lt;':'<','&gt;':'>'};
  return named[entity]??String.fromCodePoint(entity.toLowerCase().startsWith('&#x')?parseInt(entity.slice(3),16):parseInt(entity.slice(2),10));
});

// Validate rendered content as well as image-picker fields. This catches a
// missing image or local link inserted through a rich-text editor before deploy.
export async function validateOutput(output,files,base){
  const origin='https://portfolio.invalid';
  const prefix=base+'/';
  for(const file of files.filter(f=>f.endsWith('.html'))){
    const html=await readFile(resolve(output,file),'utf8');
    const pageUrl=new URL(prefix+file,origin);
    for(const [,raw] of html.matchAll(/\b(?:href|src)="([^"]*)"/g)){
      if(!raw)continue;
      const url=new URL(unescape(raw),pageUrl);
      if(url.origin!==origin)continue;
      if(!url.pathname.startsWith(prefix))throw new Error(`Local link is outside this portfolio in ${file}: ${raw}`);
      const relative=decodeURIComponent(url.pathname.slice(prefix.length));
      const target=resolve(output,relative.endsWith('/')||!relative?relative+'index.html':relative);
      if(!target.startsWith(resolve(output)+sep))throw new Error(`Invalid local path in ${file}: ${raw}`);
      try{await access(target);}catch{throw new Error(`Missing linked file in ${file}: ${raw}. Upload the file or update the content link.`);}
    }
  }
}
