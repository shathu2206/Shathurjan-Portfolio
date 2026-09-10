import Markdown,{defaultUrlTransform} from 'react-markdown';
import {asset} from '../lib/paths';

function contentUrl(url:string){
  if(!/^\/?assets\//.test(url))return defaultUrlTransform(url);
  const [,path,suffix='']=url.match(/^([^?#]*)(.*)$/)!;
  // Markdown encodes spaces and non-ASCII filenames before this transform.
  // Decode once before applying the shared asset encoder, preserving fragments.
  let decoded=path;
  try{decoded=decodeURIComponent(path);}catch{/* A literal percent sign is a valid filename character. */}
  return asset(decoded)+suffix;
}

export function RichText({children}:{children:string}){
  return <Markdown skipHtml urlTransform={contentUrl} components={{
    h1:({children})=><h2>{children}</h2>,
    img:({src,alt})=><img src={src} alt={alt||''} loading="lazy"/>,
  }}>{children}</Markdown>;
}
