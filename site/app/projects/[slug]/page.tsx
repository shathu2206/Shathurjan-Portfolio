import {notFound} from 'next/navigation';
import content from '../../../content/portfolio';
import {ProjectPage} from '../../../components/projects';
export function generateStaticParams(){return content.projects.map(p=>({slug:p.id}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=content.projects.find(p=>p.id===slug);if(!project)notFound();return <ProjectPage project={project}/>}
