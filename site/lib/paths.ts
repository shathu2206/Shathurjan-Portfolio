export const base = process.env.NODE_ENV === 'production' ? '/Shathurjan-Portfolio' : '';
export const homeUrl = `${base}/`;
export const updatesUrl = `${base}/updates/`;
export const galleryUrl = `${base}/gallery/`;
export const routeIds = ['intro','work','experience','leadership','education','awards','skills','gallery','updates','contact'] as const;
export const pageUrl = (id:string) => id==='intro'||id==='home'?homeUrl:`${base}/${id==='work'?'projects':id}/`;
export const projectUrl = (id:string) => `${pageUrl('work')}${encodeURIComponent(id)}/`;
export const asset = (path: string) => `${base}/${path.replace(/^\/+/, '').split('/').map(encodeURIComponent).join('/')}`;
