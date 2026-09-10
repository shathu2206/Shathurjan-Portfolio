import {useId, type ImgHTMLAttributes} from 'react';
export interface ImageLayout {enabled?:boolean;width?:number;maxWidth?:number;ratio?:string;fit?:string;position?:string;background?:string}
export function Picture({layout,alt='',...props}:ImgHTMLAttributes<HTMLImageElement>&{layout?:ImageLayout}){
  const id=useId();
  if(!layout?.enabled)return <img {...props} alt={alt}/>;
  const clamp=(n:number|undefined,f:number,min:number,max:number)=>n==null||!Number.isFinite(Number(n))?f:Math.max(min,Math.min(max,Number(n)));
  const width=clamp(layout.width,100,1,100);
  const max=layout.maxWidth?`${clamp(layout.maxWidth,2560,16,3840)}px`:'100%';
  const ratio=['auto','16 / 9','3 / 2','4 / 3','1 / 1','4 / 5','9 / 16'].includes(layout.ratio||'')?layout.ratio:'auto';
  const fit=layout.fit==='cover'?'cover':'contain';
  const position=['center','top','bottom','left','right'].includes(layout.position||'')?layout.position:'center';
  const background=layout.background==='white'?'#fff':layout.background==='dark'?'#111':layout.background==='theme'?'var(--card)':'transparent';
  const selector=`img[data-picture=${JSON.stringify(id)}]`;
  const size=`width:${width}%!important;max-width:min(100%,${max})!important;margin-inline:auto;`;
  const css=`${selector}{${size}height:auto!important;max-height:none!important;aspect-ratio:${ratio}!important;object-fit:${fit}!important;object-position:${position}!important;background:${background}!important;padding:0!important;display:block}
  .page-cover:has(>${selector}),.intro-photo-stage:has(figure:not([hidden])>${selector}){${size}height:auto;aspect-ratio:auto}
  .page-cover>${selector},.intro-slides ${selector}{width:100%!important;max-width:100%!important}`;
  return <><style>{css}</style><img {...props} alt={alt} data-picture={id}/></>;
}
