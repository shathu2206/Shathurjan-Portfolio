import Markdown,{defaultUrlTransform} from 'react-markdown';
import content,{type StoryBlock} from '../content/portfolio';
import {asset} from '../lib/paths';
import {embedUrl} from '../lib/media';

export function Video({url,file,title,caption}:{url?:string;file?:string;title:string;caption?:string}){
  const embed=embedUrl(url);
  return file||embed?<figure className="video-figure">
    {file?<video controls playsInline preload="metadata" aria-label={title} src={asset(file)}/>:<iframe src={embed} title={title} loading="lazy" allow="fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>}
    {caption&&<figcaption>{caption}</figcaption>}
  </figure>:null;
}

export function StoryBlocks({blocks,label}:{blocks:StoryBlock[];label?:string}){
  return <div className="story-blocks">{blocks.map((block,index)=><section key={index} className={`story-block ${['image-left','image-right','full'].includes(block.layout||'')?block.layout:'full'}`}>
    <div className="story-copy">
      {label&&<p className="eyebrow">{label} / {String(index+1).padStart(2,'0')}</p>}
      <h2>{block.title}</h2>
      {block.body&&<div className="post-body"><Markdown skipHtml urlTransform={url=>/^\/?assets\//.test(url)?asset(url):defaultUrlTransform(url)}>{block.body}</Markdown></div>}
    </div>
    {block.image&&<figure><img src={asset(block.image)} alt={block.imageAlt||''} width="1200" height="800" loading="lazy"/>{block.caption&&<figcaption>{block.caption}</figcaption>}</figure>}
    <Video url={block.videoUrl} file={block.videoFile} title={block.title}/>
  </section>)}</div>;
}

export function PageBlocks({page}:{page:string}){
  const blocks=content.pages.find(p=>p.id===page)?.blocks??[];
  return blocks.length?<div className="page-extra-blocks wrap"><StoryBlocks blocks={blocks}/></div>:null;
}
