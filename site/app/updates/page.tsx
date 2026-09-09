import {loadPosts} from '../../lib/posts';
import {UpdatesIndex} from '../../components/updates';
export default async function Updates(){return <UpdatesIndex posts={await loadPosts()}/>}
