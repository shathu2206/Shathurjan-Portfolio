import { renderToStaticMarkup } from 'react-dom/server';
import Home from '../app/page';
import content from '../content/portfolio';
import {UpdatesIndex,PostPage} from '../components/updates';
import {loadPosts,type Post} from '../lib/posts';
import {base} from '../lib/paths';
import {themeStyle} from '../lib/theme';
export { content };
export { loadPosts };

function document(page:React.ReactNode,title:string,description:string){return '<!doctype html>'+renderToStaticMarkup(<html lang="en" style={themeStyle()}><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>{title}</title><meta name="description" content={description}/><link rel="icon" href={`${base}/favicon.svg`}/><link rel="stylesheet" href={`${base}/styles.css`}/></head><body>{page}</body></html>)}

export function renderIcon(){return renderToStaticMarkup(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill={content.settings.appearance.background}/><text x="32" y="43" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="26" fill={content.settings.appearance.accent}>{content.settings.branding.monogram}</text></svg>)}

export function render() {
  const title = `${content.profile.name} | ${content.settings.metadata.title}`;
  return document(<Home/>,title,content.settings.metadata.description);
}
export function renderUpdates(posts:Post[]){return document(<UpdatesIndex posts={posts}/>,`${content.settings.metadata.updatesTitle} | ${content.profile.name}`,content.settings.journal.description)}
export function renderPost(post:Post){return document(<PostPage post={post}/>,`${post.title} | ${content.profile.name}`,post.excerpt||post.title)}
