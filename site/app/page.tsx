import { ArrowDown, ArrowUpRight, ArrowRight } from 'lucide-react';
import content from '../content/portfolio';
import {Header,Footer} from '../components/site-chrome';
import {CVSections} from '../components/cv-sections';
import {asset,updatesUrl} from '../lib/paths';

export const dynamic = 'force-static';

export default function Home() {
  const { profile, projects, education } = content;
  return <>
    <Header/>
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/>{profile.availability}</p><h1 id="hero-title">{profile.firstName}<br/><span>{profile.lastName}.</span></h1><p className="hero-role">{profile.role}</p><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowDown size={18}/></a><a className="text-link" href={asset(profile.resume)} target="_blank" rel="noreferrer">View CV <ArrowUpRight size={18}/></a></div></div>
        <aside className="profile-note" aria-label="Engineering focus"><div className="note-top"><span>FIELD NOTES</span><span>01 / PROFILE</span></div><p className="note-headline">Design.<br/>Analyse.<br/><span>Build.</span></p><div className="note-rule"/><p>{profile.focus}</p><div className="note-bottom"><span>{education.school}</span><ArrowUpRight size={24}/></div></aside>
      </section>
      <div className="credentials wrap">{profile.highlights.map(item => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
      <section id="work" className="work-section wrap" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Engineering in practice.</h2></div><p>Structures, systems, and the decisions<br className="desktop-break"/> that connect them.</p></div>
        <div className="project-grid">{projects.map((project, index) => <article className="project" key={project.id} id={project.id}>
          <div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-category">{project.category}</span><span className="project-date">{project.date}</span></div>
          {project.images.length > 0 && <div className="project-gallery">{project.images.map(img => <figure key={img.src}><img src={asset(img.src)} alt={img.alt} loading="lazy" width="1200" height="800"/>{img.caption && <figcaption>{img.caption}</figcaption>}</figure>)}</div>}
          <p className="project-organization">{project.organization}</p><h3>{project.title}</h3><p className="project-role">{project.role}</p><p className="project-summary">{project.summary}</p>
          <div className="project-detail"><h4>My contribution</h4><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></div>
          <div className="project-outcome"><span>{project.outcomeLabel}</span><p>{project.outcome}</p></div><ul className="tags" aria-label="Tools and methods">{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          {project.link && <a className="text-link project-link" href={project.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16}/></a>}
        </article>)}</div>
      </section>
      <CVSections/>
      <section className="updates-invitation wrap"><div><p className="eyebrow">07 / ENGINEERING UPDATES</p><h2>What I’m working on.</h2><p>Project progress, lessons learned, and notes from engineering student life.</p></div><a className="button primary" href={updatesUrl}>Explore updates <ArrowUpRight size={18}/></a></section>
      <section id="contact" className="contact-section wrap" aria-labelledby="contact-title"><div><p className="eyebrow">08 / GET IN TOUCH</p><h2 id="contact-title">Let’s build<br/>what’s next.</h2><p>{profile.contactIntro}</p></div><div className="contact-links">{profile.phone && <a href={`tel:${profile.phone.replace(/[^+0-9]/g, "")}`}><span><small>PHONE</small>{profile.phone}</span><ArrowUpRight/></a>}<a href={`mailto:${profile.email}`}><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span><small>CONNECT</small>LinkedIn</span><ArrowUpRight/></a><a href={asset(profile.resume)} target="_blank" rel="noreferrer"><span><small>EXPERIENCE & EDUCATION</small>View my CV</span><ArrowRight/></a></div></section>
    </main>
    <Footer/>
  </>;
}
