import { ArrowDown, ArrowUpRight } from 'lucide-react';
import content from '../content/portfolio';
import {Header,Footer} from '../components/site-chrome';
import {ContactSection} from '../components/contact';
import {CVSections} from '../components/cv-sections';
import {asset,updatesUrl} from '../lib/paths';

export const dynamic = 'force-static';

export default function Home() {
  const { profile, projects, settings } = content;
  const nameParts = profile.name.trim().split(/\s+/);
  const sections = new Set(settings.sections);
  return <>
    <Header/>
    <main id="main">
      <section id="intro" className="hero wrap hero-simple" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/>{profile.availability}</p><h1 id="hero-title">{nameParts[0]}{nameParts.length>1&&<><br/><span>{nameParts.slice(1).join(" ")}</span></>}</h1><p className="hero-role">{profile.role}</p><div className="hero-intro">{profile.intro.split(/\n\s*\n/).filter(Boolean).map((text,index)=><p className="preserve-lines" key={index}>{text}</p>)}</div><div className="language-list">{profile.languages?.map(item=><span key={item.language}>{item.language} · {item.level}</span>)}</div><div className="hero-actions">{sections.has("work")&&<a className="button primary" href="#work">{settings.intro.workButton} <ArrowDown size={18}/></a>}<a className="text-link" href={asset(content.contact.resume)} target="_blank" rel="noreferrer">{settings.intro.cvButton} <ArrowUpRight size={18}/></a></div></div>
      </section>
      {!!profile.highlights.length&&<div className="credentials wrap">{profile.highlights.map(item => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>}
      {[...sections].map(id=><div className="section-slot" key={id}>{id==="work"?(<section id="work" className="work-section wrap" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">{settings.work.eyebrow}</p><h2 id="work-title">{settings.work.title}</h2></div><p>{settings.work.description}</p></div>
        <div className="project-grid">{projects.map((project, index) => <article className="project" key={project.id} id={project.id}>
          <div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-category">{project.category}</span><span className="project-date">{project.date}</span></div>
          {project.images.length > 0 && <div className="project-gallery">{project.images.map(img => <figure key={img.src}><img src={asset(img.src)} alt={img.alt} loading="lazy" width="1200" height="800"/>{img.caption && <figcaption>{img.caption}</figcaption>}</figure>)}</div>}
          <p className="project-organization">{project.organization}</p><h3>{project.title}</h3><p className="project-role">{project.role}</p><p className="project-summary">{project.summary}</p>
          <div className="project-detail"><h4>{settings.work.contributionLabel}</h4><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></div>
          <div className="project-outcome"><span>{project.outcomeLabel}</span><p>{project.outcome}</p></div><ul className="tags" aria-label={settings.work.toolsLabel}>{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          {project.link && <a className="text-link project-link" href={project.link} target="_blank" rel="noreferrer">{settings.work.linkLabel} <ArrowUpRight size={16}/></a>}
        </article>)}</div>
      </section>):id==="updates"?(<section className="updates-invitation wrap"><div><p className="eyebrow">{settings.updates.eyebrow}</p><h2>{settings.updates.title}</h2><p>{settings.updates.description}</p></div><a className="button primary" href={updatesUrl}>{settings.updates.button} <ArrowUpRight size={18}/></a></section>):id==="contact"?(<ContactSection/>):<CVSections section={id}/>}</div>)}
    </main>
    <Footer/>
  </>;
}
