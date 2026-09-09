import settingsData from './settings.json';
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

export interface ContactLink {label:string;type:'phone'|'email'|'link'|'linkedin'|'cv'|'file';text?:string;value?:string;file?:string}

export interface Experience { title: string; organization: string; date: string; description: string; details?: string[] }

interface Portfolio {
  introPhotos: {visible:boolean;label:string;autoplay:boolean;intervalSeconds:number;previousLabel:string;nextLabel:string;photoLabel:string;photos:{image:string;alt:string;caption?:string;fit?:string;position?:string}[]};
  contact: {eyebrow:string;title:string;intro:string;resume:string;links:ContactLink[]};
  settings: typeof settingsData.settings;
  gallery: {eyebrow:string;title:string;description:string;emptyMessage:string;photos:{image:string;alt:string;title:string;caption?:string}[]};
  profile: {
    name: string; role: string;
    availability: string; intro: string;
    languages?: {language:string;level:string}[];
    highlights: {value: string; label: string}[];
  };
  projects: {
    id: string; title: string; category: string; organization: string;
    date: string; role: string; summary: string; contributions: string[];
    outcomeLabel: string; outcome: string; tools: string[];
    images: {src: string; alt: string; caption?: string}[]; link?: string;
  }[];
  experience: Experience[];
  leadership: Experience[];
  awards: {title:string;organization:string;date:string}[];
  education: {school: string; degree: string; date: string; coursework: string; gpa?:string; previous?:{school:string;degree:string;date:string;details?:string[]}[]};
  skills: {title: string; items: string[]}[];
}

// Optional lists can be omitted by the editor when empty.
const data = { ...settingsData, ...introPhotosData, ...contactData, ...galleryData, ...profile, ...projects, ...experience, ...education, ...skills, ...leadership, ...awards } as unknown as Portfolio;
const content: Portfolio = {
  ...data,
  introPhotos: {...data.introPhotos, photos: data.introPhotos.photos ?? []},
  contact: {...data.contact, links: data.contact.links ?? []},
  gallery: {...data.gallery, photos: data.gallery.photos ?? []},
  settings: {...data.settings, sections: data.settings.sections ?? [], navigation: data.settings.navigation ?? []},
  profile: { ...data.profile, highlights: data.profile.highlights ?? [] },
  projects: (data.projects ?? []).map(project => ({
    ...project, images: project.images ?? [], tools: project.tools ?? [],
    contributions: project.contributions ?? [],
  })),
  experience: data.experience ?? [],
  leadership: data.leadership ?? [],
  awards: data.awards ?? [],
  skills: (data.skills ?? []).map(group => ({...group, items: group.items ?? []})),
};
export default content;
