import {Picture, type ImageLayout} from './picture';
import content from '../content/portfolio';
import {asset} from '../lib/paths';
export function safeWebUrl(value?:string){if(!value)return undefined;try{const url=new URL(value);return ['https:','http:'].includes(url.protocol)?url.href:undefined;}catch{return undefined;}}
export function Cover({page}:{page:string}){const c=content.pages.find(p=>p.id===page);if(!c?.cover)return null;return <figure className="page-cover"><Picture layout={c.coverLayout} src={asset(c.cover)} alt={c.coverAlt||''} style={{objectPosition:c.position||'center',filter:c.monochrome===false?'none':'grayscale(1)'}} width="1600" height="700"/>{c.credit&&<figcaption>{safeWebUrl(c.creditUrl)?<a href={safeWebUrl(c.creditUrl)} target="_blank" rel="noreferrer">{c.credit}</a>:c.credit}</figcaption>}</figure>}
export function PageIntro({page,eyebrow,title,description}:{page:string;eyebrow:string;title:string;description?:string}){return <><Cover page={page}/><div className="page-intro wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{description&&<p className="page-description">{description}</p>}</div></>}
export function OrganizationMark({name,visible=true,logo:customLogo,layout}:{name:string;visible?:boolean;logo?:string;layout?:ImageLayout}){
  if(!visible)return null;
  const org=content.organizations.find(o=>o.name===name||o.match.some(m=>m&&name.toLowerCase().includes(m.toLowerCase())));
  const source=customLogo||(org?.visible!==false?org?.logo:undefined);
  const logo=source?<Picture className="organization-logo" layout={layout?.enabled?layout:org?.logoLayout} src={asset(source)} alt={name} loading="lazy" width="180" height="90"/>:null;
  return logo&&safeWebUrl(org?.url)?<a className="organization-logo-link" href={safeWebUrl(org?.url)} target="_blank" rel="noreferrer">{logo}</a>:logo;
}
