export const base = process.env.NODE_ENV === 'production' ? '/Shathurjan-Portfolio' : '';
export const homeUrl = `${base}/`;
export const updatesUrl = `${base}/updates/`;
export const galleryUrl = `${base}/gallery/`;
export const asset = (path: string) => `${base}/${path.replace(/^\/+/, '').split('/').map(encodeURIComponent).join('/')}`;
