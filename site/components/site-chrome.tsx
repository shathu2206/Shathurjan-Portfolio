import content from '../content/portfolio';
import {homeUrl,pageUrl,routeIds} from '../lib/paths';
export function Header({page='intro'}:{page?:string}) {
  const {settings,profile}=content;
  const items=settings.navigation.filter(item=>routeIds.includes(item.target as typeof routeIds[number])&&(item.target==='intro'||item.target==='updates'||item.target==='gallery'||settings.sections.includes(item.target)));
  const link=(item:typeof items[number],index:number)=><a key={index} href={pageUrl(item.target)} aria-current={item.target===page?'page':undefined}>{item.label}</a>;
  return <><a className="skip-link" href="#main">{settings.accessibility.skipLink}</a><div className="header-shell"><header className="site-header wrap"><a className="wordmark" href={homeUrl} aria-label={`${profile.name}, ${settings.accessibility.home}`}><span className="monogram">{settings.branding.monogram}</span><span>{profile.name}<br/><span className="wordmark-sub">{settings.branding.subtitle}</span></span></a><nav aria-label={settings.accessibility.navigation}>{items.filter(i=>i.placement!=='more').map(link)}{items.some(i=>i.placement==='more')&&<details className="nav-more"><summary>{settings.branding.moreLabel}</summary><div className="nav-menu">{items.filter(i=>i.placement==='more').map(link)}</div></details>}</nav></header></div></>;
}
export function Footer(){return <footer className="wrap"><span>© {new Date().getFullYear()} {content.profile.name}</span><span>{content.settings.branding.footer}</span><a href="#main">{content.settings.accessibility.backToTop}</a></footer>}
