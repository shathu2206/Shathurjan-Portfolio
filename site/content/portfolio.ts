import type {ImageLayout} from '../components/picture';
import settingsData from './settings.json';
import appearanceData from './appearance.json';
import introPhotosData from './intro-photos.json';
import galleryData from './gallery.json';
import profile from './profile.json';
import contactData from './contact.json';
import projects from './projects.json';
import experience from './experience.json';
import education from './education.json';
import skills from './skills.json';
import leadership from './leadership.json';
import awards from './awards.json';
import pages from './pages.json';
import organizations from './organizations.json';

export interface ContactLink {label:string;type:'phone'|'email'|'link'|'linkedin'|'cv'|'file';text?:string;value?:string;file?:string}

export interface LogoOptions {showLogo?:boolean;logoLayout?:ImageLayout;logo?:string}
export interface Experience extends LogoOptions {showPhotos?:boolean;photos?:{imageLayout?:ImageLayout;image:string;alt:string;caption?:string;visible?:boolean}[]; title: string; organization: string; date: string; description: string; details?: string[]; imageLayout?:ImageLayout;image?:string; imageAlt?:string; imageCaption?:string }
export interface StoryBlock {title:string;body?:string;imageLayout?:ImageLayout;image?:string;imageAlt?:string;caption?:string;layout?:string;videoUrl?:string;videoFile?:string;videoCaptions?:string;videoCaptionLanguage?:string;videoCaptionLabel?:string}
export interface Project extends LogoOptions {id:string;title:string;category:string;organization:string;date:string;role:string;summary:string;contributions:string[];outcomeLabel:string;outcome:string;tools:string[];images:{srcLayout?:ImageLayout;src:string;alt:string;caption?:string}[];link?:string;coverLayout?:ImageLayout;cover?:string;coverAlt?:string;coverCaption?:string;coverFit?:string;coverPosition?:string;featured?:boolean;sections:StoryBlock[];videos:{title:string;url?:string;file?:string;caption?:string;captions?:string;captionLanguage?:string;captionLabel?:string}[]}
export interface PageCover {id:string;coverLayout?:ImageLayout;cover?:string;coverAlt?:string;position?:string;credit?:string;creditUrl?:string;monochrome?:boolean;blocks?:StoryBlock[]}
export interface Organization {visible?:boolean;name:string;match:string[];logoLayout?:ImageLayout;logo?:string;url?:string}

interface Portfolio {
  pages:PageCover[];
  organizations:Organization[];
  introPhotos: {visible:boolean;label:string;autoplay:boolean;intervalSeconds:number;previousLabel:string;nextLabel:string;photoLabel:string;photos:{imageLayout?:ImageLayout;image:string;alt:string;caption?:string;fit?:string;position?:string}[]};
  contact: {eyebrow:string;title:string;intro:string;resume:string;links:ContactLink[]};
  settings: typeof settingsData.settings & {branding:{logoLayout?:ImageLayout}} & typeof appearanceData;
  gallery: {eyebrow:string;title:string;description:string;emptyMessage:string;photos:{imageLayout?:ImageLayout;image:string;alt:string;title:string;caption?:string;fit?:string;position?:string}[]};
  profile: {
    name: string; role: string;
    availability: string; intro: string;
    languages?: {language:string;level:string}[];
    highlights: {value: string; label: string}[];
  };
  projects: Project[];
  experience: Experience[];
  leadership: Experience[];
  awards: (LogoOptions & {title:string;organization:string;date:string})[];
  education: LogoOptions & {school: string; degree: string; date: string; coursework: string; gpa?:string; previous?:(LogoOptions & {school:string;degree:string;date:string;details?:string[]})[]};
  skills: {title: string; items: {name:string;level?:string;note?:string}[]}[];
}

// Optional lists can be omitted by the editor when empty.
const data = { ...settingsData, ...pages, ...organizations, ...introPhotosData, ...contactData, ...galleryData, ...profile, ...projects, ...experience, ...education, ...skills, ...leadership, ...awards } as unknown as Portfolio;
const content: Portfolio = {
  ...data,
  pages:data.pages??[],
  organizations:(data.organizations??[]).map(org=>({...org,match:org.match??[]})),
  introPhotos: {...data.introPhotos, photos: data.introPhotos.photos ?? []},
  contact: {...data.contact, links: data.contact.links ?? []},
  gallery: {...data.gallery, photos: data.gallery.photos ?? []},
  settings: {...data.settings, appearance:appearanceData.appearance, sections: data.settings.sections ?? [], navigation: data.settings.navigation ?? [], skills:{...data.settings.skills,levels:['Not yet rated','Introduced','Developing','Proficient','Advanced'].map((fallback,index)=>data.settings.skills.levels?.[index]||fallback)}},
  profile: { ...data.profile, highlights: data.profile.highlights ?? [] },
  projects: (data.projects ?? []).map(project => ({
    ...project, images: project.images ?? [], tools: project.tools ?? [],
    contributions: project.contributions ?? [], sections:project.sections??[],videos:project.videos??[],
  })),
  experience: data.experience ?? [],
  leadership: data.leadership ?? [],
  awards: data.awards ?? [],
  skills: (data.skills ?? []).map(group => ({...group, items: group.items ?? []})),
};
export default content;
