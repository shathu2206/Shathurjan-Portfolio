import data from '../content/notice.json';

interface NoticeSettings {enabled?:boolean;version?:string;title?:string;message?:string;dismissLabel?:string;lastUpdated?:string;updatedLabel?:string;showFooterDate?:boolean}
const notice=(data as {notice?:NoticeSettings}).notice??{};
export function LastUpdated({footer=false}:{footer?:boolean}){
  if(footer&&notice.showFooterDate===false)return null;
  const value=notice.lastUpdated;
  if(!value||!/^\d{4}-\d{2}-\d{2}$/.test(value))return null;
  const date=new Date(`${value}T12:00:00Z`);
  if(Number.isNaN(date.getTime())||date.toISOString().slice(0,10)!==value)return null;
  return <span className="last-updated">{notice.updatedLabel||'Last updated'} <time dateTime={value}>{date.toLocaleDateString('en-CA',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'})}</time></span>;
}
export function SiteNotice(){
  if(notice.enabled===false||!notice.message?.trim())return null;
  return <aside className="site-notice" data-site-notice data-notice-version={notice.version||'construction'} aria-labelledby="site-notice-title" hidden>
    <h2 id="site-notice-title">{notice.title||'Portfolio update'}</h2>
    <p className="preserve-lines">{notice.message}</p>
    <div className="notice-actions"><LastUpdated/><button type="button" data-dismiss-notice>{notice.dismissLabel||'Got it'}</button></div>
  </aside>;
}
