import {readdir,readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
export interface Post {slug:string; title:string;date:string;excerpt?:string;body:string;published:boolean;linkedin?:string;image?:string;imageAlt?:string}
export async function loadPosts(directory=resolve(process.cwd(),'content/posts')):Promise<Post[]> {
  const names=await readdir(directory);
  const posts=await Promise.all(names.filter(name=>name.endsWith('.json')).map(async name=>{
    const data=JSON.parse(await readFile(resolve(directory,name),'utf8'));
    const slug=name.slice(0,-5);
    if(!/^[a-z0-9][a-z0-9-]*$/.test(slug)) throw new Error(`Use a lowercase hyphenated post filename: ${name}`);
    if(data.published!==true)return null;
    if(!data.title?.trim()||!data.body?.trim()||!/^\d{4}-\d{2}-\d{2}$/.test(data.date)||Number.isNaN(Date.parse(data.date+'T12:00:00Z')))throw new Error(`Complete the title, date, and post text in ${name}`);
    if(data.linkedin && !/^https:\/\/(www\.)?linkedin\.com\//i.test(data.linkedin))throw new Error(`Use a LinkedIn https:// URL in ${name}`);
    if(data.image && !data.imageAlt?.trim())throw new Error(`Add an image description in ${name}`);
    return {...data,slug} as Post;
  }));
  return posts.filter((post):post is Post=>post!==null).sort((a,b)=>b.date.localeCompare(a.date)||a.slug.localeCompare(b.slug));
}
