import { renderToStaticMarkup } from 'react-dom/server';
import Home from '../app/page';
import content from '../content/portfolio';
import {UpdatesIndex,PostPage} from '../components/updates';
import {loadPosts,type Post} from '../lib/posts';
import {base} from '../lib/paths';
export { content };
export { loadPosts };

function document(page:React.ReactNode,title:string,description:string){return '<!doctype html>'+renderToStaticMarkup(<html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>{title}</title><meta name="description" content={description}/><link rel="icon" href={`${base}/favicon.svg`}/><link rel="stylesheet" href={`${base}/styles.css`}/></head><body>{page}</body></html>)}

export function render() {
  const title = `${content.profile.name} | Aerospace Engineering Portfolio`;
  return document(<Home/>,title,`${content.profile.role} Projects, technical experience, leadership, education, and engineering updates.`);
}
export function renderUpdates(posts:Post[]){return document(<UpdatesIndex posts={posts}/>,`Engineering Updates | ${content.profile.name}`,'Project progress, lessons learned, and life as an aerospace engineering student.')}
export function renderPost(post:Post){return document(<PostPage post={post}/>,`${post.title} | ${content.profile.name}`,post.excerpt||post.title)}
