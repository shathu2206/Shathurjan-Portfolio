import content from '../content/portfolio';
import {Header,Footer} from './site-chrome';
import {PageIntro,Cover} from './page-intro';
import {CVSections} from './cv-sections';
import {PageBlocks} from './story-blocks';
import {ContactSection} from './contact';
export const cvPageIds=['experience','leadership','education','awards','skills','contact'] as const;
export type CVPageId=typeof cvPageIds[number];
export function SectionPage({page}:{page:CVPageId}){if(page==='contact')return <><Header page={page}/><main id="main"><Cover page="contact"/><ContactSection standalone/><PageBlocks page={page}/></main><Footer/></>;const s=content.settings[page];return <><Header page={page}/><main id="main"><PageIntro page={page} eyebrow={s.eyebrow} title={s.title} description={s.description}/><CVSections section={page}/><PageBlocks page={page}/></main><Footer/></>}
