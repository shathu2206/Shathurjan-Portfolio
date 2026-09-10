import {asset} from '../lib/paths';
import data from '../content/image-filters.json';

interface ImageFilter {image:string;enabled?:boolean;effect?:string;brightness?:number;contrast?:number;saturation?:number;opacity?:number;resize?:boolean;ratio?:string;width?:number;maxWidth?:number;fit?:string;position?:string}
export function imageFilterStyles(items:ImageFilter[]){
  const clamp=(value:number|undefined,fallback:number,min:number,max:number)=>value==null||!Number.isFinite(Number(value))?fallback:Math.min(max,Math.max(min,Number(value)));
  return items.filter(item=>item.image&&item.enabled!==false).map(item=>{
    const effect=item.effect==='grayscale'?'grayscale(1)':item.effect==='sepia'?'sepia(1)':'grayscale(0) sepia(0)';
    const selector=`img[src=${JSON.stringify(asset(item.image))}]`;
    let css=`${selector}{filter:${effect} brightness(${clamp(item.brightness,100,0,200)}%) contrast(${clamp(item.contrast,100,0,200)}%) saturate(${clamp(item.saturation,100,0,200)}%)!important;opacity:${clamp(item.opacity,100,0,100)/100}!important}`;
    if(item.effect==='inherit')css='';
    if(item.resize){
      const width=clamp(item.width,100,10,100);
      const max=item.maxWidth?`${clamp(item.maxWidth,2560,40,2560)}px`:'100%';
      const ratio=['auto','16 / 9','3 / 2','4 / 3','1 / 1','4 / 5','9 / 16'].includes(item.ratio||'')?item.ratio:undefined;
      const fit=item.fit==='cover'?'cover':'contain';
      const position=['center','top','bottom','left','right'].includes(item.position||'')?item.position:'center';
      css+=`${selector}{width:${width}%!important;max-width:min(100%,${max})!important;height:auto!important;max-height:none!important;display:block;margin-inline:auto!important;object-fit:${fit}!important;object-position:${position}!important;${ratio?`aspect-ratio:${ratio}!important;`:''}}`;
      // Resize the frame as well as its image so covers/slides do not retain an empty fixed-size box.
      const frames=`.page-cover:has(>${selector}),.intro-photo-stage:has(figure:not([hidden])>${selector})`;
      css+=`${frames}{width:${width}%!important;max-width:min(100%,${max})!important;margin-inline:auto!important;${ratio?'height:auto!important;aspect-ratio:auto!important;':''}}`;
      css+=`.page-cover>${selector},.intro-slides ${selector}{width:100%!important;max-width:100%!important}`;
      if(!ratio)css+=`.page-cover>${selector}{height:100%!important}`;
    }
    return css;
  }).join('\n');
}
export function ImageFilters(){
  const css=imageFilterStyles((data.imageFilters??[]) as ImageFilter[]);
  return css?<style>{css}</style>:null;
}
