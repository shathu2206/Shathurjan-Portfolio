import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const code=readFileSync(new URL('../public/site-notice.js',import.meta.url),'utf8');
function page({saved=new Map(),blocked=false,version='v1',missing=false}={}){
 const events={},windowEvents={};
 const reopen={hidden:true,attributes:{},setAttribute(k,v){this.attributes[k]=v},focus(){this.focused=true},addEventListener:(name,fn)=>events.reopen=fn};
 const notice={hidden:true,dataset:{noticeVersion:version},focus(){this.focused=true},querySelector:()=>({addEventListener:(name,fn)=>events[name]=fn})};
 const storage={getItem(k){if(blocked)throw Error();return saved.get(k)},setItem(k,v){if(blocked)throw Error();saved.set(k,v)}};
 const main={setAttribute(){},focus(){}};
 vm.runInNewContext(code,{document:{querySelector:s=>s==='main'?main:missing?null:notice,querySelectorAll:()=>[reopen]},window:{localStorage:storage,sessionStorage:storage,addEventListener:(name,fn)=>windowEvents[name]=fn}});
 return {notice,reopen,events,windowEvents,saved};
}
const first=page();assert.equal(first.notice.hidden,false);first.events.click();assert.equal(first.notice.hidden,true);
assert.equal(page({saved:first.saved}).notice.hidden,true,'Acknowledgement must persist on other pages/visits');
const returning=page({saved:first.saved});assert.equal(returning.reopen.hidden,false);returning.events.reopen();assert.equal(returning.notice.hidden,false);assert.equal(returning.reopen.attributes['aria-expanded'],'true');assert(returning.notice.focused);returning.events.click();assert.equal(returning.notice.hidden,true);assert.equal(returning.reopen.attributes['aria-expanded'],'false');assert(returning.reopen.focused);assert.equal(page({saved:returning.saved}).notice.hidden,true);
assert.equal(page({saved:first.saved,version:'v2'}).notice.hidden,false,'New version can show again');
const restricted=page({blocked:true});restricted.events.click();assert.equal(restricted.notice.hidden,true);
const tab=page();tab.windowEvents.storage({key:'shathurjan-portfolio-notice:v1',newValue:'dismissed'});assert.equal(tab.notice.hidden,true);
assert.doesNotThrow(()=>page({missing:true}));
console.log('PASS: first visit, dismissal across pages/visits, new version, storage unavailable, another-tab dismissal, disabled notice.');
