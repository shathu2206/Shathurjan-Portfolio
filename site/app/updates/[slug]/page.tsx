import {notFound} from 'next/navigation';
import {loadPosts} from '../../../lib/posts';
import {PostPage} from '../../../components/updates';
export default async function Update({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post=(await loadPosts()).find(item=>item.slug===slug);if(!post)notFound();return <PostPage post={post}/>}
