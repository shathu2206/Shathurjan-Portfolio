export function embedUrl(value?:string):string|undefined{
if(!value)return undefined;
try{const url=new URL(value);if(url.protocol!=='https:')return undefined;const host=url.hostname.toLowerCase();let id='';
if(host==='youtu.be')id=url.pathname.slice(1);
else if(['youtube.com','www.youtube.com','m.youtube.com','youtube-nocookie.com','www.youtube-nocookie.com'].includes(host))id=url.searchParams.get('v')||url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)\/?$/)?.[1]||'';
if(/^[A-Za-z0-9_-]{11}$/.test(id))return `https://www.youtube-nocookie.com/embed/${id}`;
if(['vimeo.com','www.vimeo.com','player.vimeo.com'].includes(host)){const match=url.pathname.match(/^\/(?:video\/)?(\d+)\/?$/);if(match)return `https://player.vimeo.com/video/${match[1]}`;}
}catch{}return undefined;
}
