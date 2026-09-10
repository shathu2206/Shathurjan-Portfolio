import content from '../content/portfolio';
import {Header,Footer} from './site-chrome';
import {PageIntro,Cover} from './page-intro';
import {CVSections} from './cv-sections';
import {ContactSection} from './contact';
export const cvPageIds=['experience','leadership','education','awards','skills','contact'] as const;
export type CVPageId=typeof cvPageIds[number];
export function SectionPage({page}:{page:CVPageId}){if(page==='contact')return <><Header page={page}/><main id="main"><Cover page="contact"/><ContactSection standalone/></main><Footer/></>;const s=content.settings[page];return <><Header page={page}/><main id="main"><PageIntro page={page} eyebrow={s.eyebrow} title={s.title} description={page==='skills'?content.settings.skills.description:content.pages.find(p=>p.id===page)?.description}/><CVSections section={page}/></main><Footer/></>}
