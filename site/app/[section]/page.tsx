import {notFound} from 'next/navigation';
import {SectionPage,cvPageIds,type CVPageId} from '../../components/section-page';
export function generateStaticParams(){return cvPageIds.map(section=>({section}))}
export default async function Page({params}:{params:Promise<{section:string}>}){const {section}=await params;if(!cvPageIds.includes(section as CVPageId))notFound();return <SectionPage page={section as CVPageId}/>}
