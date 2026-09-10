import {asset} from '../lib/paths';
import data from '../content/image-filters.json';

interface ImageFilter {image:string;enabled?:boolean;effect?:string;brightness?:number;contrast?:number;saturation?:number;opacity?:number}
export function imageFilterStyles(items:ImageFilter[]){
  const clamp=(value:number|undefined,fallback:number,min:number,max:number)=>value==null||!Number.isFinite(Number(value))?fallback:Math.min(max,Math.max(min,Number(value)));
  return items.filter(item=>item.image&&item.enabled!==false).map(item=>{
    const effect=item.effect==='grayscale'?'grayscale(1)':item.effect==='sepia'?'sepia(1)':'grayscale(0) sepia(0)';
    return `img[src=${JSON.stringify(asset(item.image))}]{filter:${effect} brightness(${clamp(item.brightness,100,0,200)}%) contrast(${clamp(item.contrast,100,0,200)}%) saturate(${clamp(item.saturation,100,0,200)}%)!important;opacity:${clamp(item.opacity,100,0,100)/100}!important}`;
  }).join('\n');
}
export function ImageFilters(){
  const css=imageFilterStyles(data.imageFilters as ImageFilter[]);
  return css?<style>{css}</style>:null;
}
