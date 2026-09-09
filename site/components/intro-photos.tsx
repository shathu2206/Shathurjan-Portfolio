import {createElement} from 'react';
import {ChevronLeft,ChevronRight} from 'lucide-react';
import content from '../content/portfolio';
import {asset} from '../lib/paths';

export function IntroPhotos(){
  const {introPhotos:p}=content;
  if(!p.visible||!p.photos.length)return null;
  return createElement('intro-carousel',{
    className:'intro-carousel',role:'region','aria-roledescription':'carousel','aria-label':p.label,
    'data-autoplay':String(p.autoplay),'data-interval':String(p.intervalSeconds),
    'data-pause-label':p.pauseLabel,'data-play-label':p.playLabel,
  },<>
    <div className="intro-slides">{p.photos.map((photo,index)=><figure data-slide key={index} hidden={index!==0} role="group" aria-roledescription="slide" aria-label={`${index+1} / ${p.photos.length}`}>
      <img src={asset(photo.image)} alt={photo.alt} width="900" height="1125" loading={index===0?'eager':'lazy'} style={{objectFit:photo.fit==='cover'?'cover':'contain',objectPosition:photo.position||'center'}}/>
      {photo.caption&&<figcaption>{photo.caption}</figcaption>}
    </figure>)}</div>
    <div className="intro-photo-controls" data-controls hidden>
      <div className="intro-photo-navigation">
        <button type="button" data-previous aria-label={p.previousLabel}><ChevronLeft size={20}/></button>
        <span data-counter aria-hidden="true">1 / {p.photos.length}</span>
        <button type="button" data-next aria-label={p.nextLabel}><ChevronRight size={20}/></button>
        <button type="button" data-toggle>{p.pauseLabel}</button>
      </div>
      <div className="intro-photo-dots">{p.photos.map((photo,index)=><button type="button" data-dot={index} key={index} aria-label={`${p.photoLabel} ${index+1}: ${photo.caption||photo.alt}`} aria-current={index===0?'true':undefined}><span/></button>)}</div>
    </div>
    <span className="sr-only" data-announcement aria-live="polite" aria-atomic="true"/>
  </>);
}
