import content from '../content/portfolio';
import {homeUrl,updatesUrl} from '../lib/paths';
export function Header({updates=false}:{updates?:boolean}) {
  const anchor=(id:string)=>updates ? `${homeUrl}#${id}` : `#${id}`;
  return <><a className="skip-link" href="#main">Skip to content</a><div className="header-shell"><header className="site-header wrap"><a className="wordmark" href={homeUrl} aria-label={`${content.profile.name}, home`}><span className="monogram">SM<span>↗</span></span><span>SHATHURJAN<br/><span className="wordmark-sub">ENGINEERING PORTFOLIO</span></span></a><nav aria-label="Main navigation"><a href={anchor('work')}>Projects</a><a href={anchor('experience')}>Experience</a><a href={anchor('leadership')}>Leadership</a><a href={anchor('education')}>Education</a><a href={anchor('skills')}>Skills</a><a className="updates-nav" href={updatesUrl} aria-current={updates?'page':undefined}>Updates ↗</a><a href={anchor('contact')}>Contact</a></nav></header></div></>;
}
export function Footer(){return <footer className="wrap"><span>© {new Date().getFullYear()} {content.profile.name}</span><span>Aerospace engineering · Toronto</span><a href="#main">Back to top ↑</a></footer>}
