import content from '../content/portfolio';
import {homeUrl,updatesUrl} from '../lib/paths';
export function Header({updates=false}:{updates?:boolean}) {
  const {settings,profile}=content;
  const anchor=(id:string)=>updates ? `${homeUrl}#${id}` : `#${id}`;
  return <><a className="skip-link" href="#main">{settings.accessibility.skipLink}</a><div className="header-shell"><header className="site-header wrap"><a className="wordmark" href={homeUrl} aria-label={`${content.profile.name}, ${settings.accessibility.home}`}><span className="monogram">{settings.branding.monogram}<span>↗</span></span><span>{profile.name}<br/><span className="wordmark-sub">{settings.branding.subtitle}</span></span></a><nav aria-label={settings.accessibility.navigation}>{settings.navigation.filter(item=>item.target==="intro"||item.target==="updates"||settings.sections.includes(item.target)).map((item,index)=><a key={index} className={item.target==="updates"?"updates-nav":undefined} href={item.target==="updates"?updatesUrl:anchor(item.target)} aria-current={updates&&item.target==="updates"?"page":undefined}>{item.label}</a>)}</nav></header></div></>;
}
export function Footer(){return <footer className="wrap"><span>© {new Date().getFullYear()} {content.profile.name}</span><span>{content.settings.branding.footer}</span><a href="#main">{content.settings.accessibility.backToTop}</a></footer>}
