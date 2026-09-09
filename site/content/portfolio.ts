import profile from './profile.json';
import projects from './projects.json';
import experience from './experience.json';
import education from './education.json';
import skills from './skills.json';
import leadership from './leadership.json';
import awards from './awards.json';

export interface Experience { title: string; organization: string; date: string; description: string; details?: string[] }

interface Portfolio {
  profile: {
    name: string; firstName: string; lastName: string; role: string;
    availability: string; intro: string; focus: string; about: string;
    email: string; linkedin: string; resume: string; contactIntro: string;
    phone?: string; summary?: string; languages?: {language:string;level:string}[];
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
const data = { ...profile, ...projects, ...experience, ...education, ...skills, ...leadership, ...awards } as unknown as Portfolio;
const content: Portfolio = {
  ...data,
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
