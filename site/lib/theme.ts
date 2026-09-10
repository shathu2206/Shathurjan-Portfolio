import type {CSSProperties} from 'react';
import content from '../content/portfolio';

export function themeStyle():CSSProperties {
  const appearance=content.settings.appearance;
  const color=(value:string,fallback:string)=>/^#[0-9a-f]{6}$/i.test(value)?value:fallback;
  const fonts=['Arial, Helvetica, sans-serif','Georgia, serif','Verdana, sans-serif','monospace'];
  const number=(value:number,fallback:number,min:number,max:number)=>Math.max(min,Math.min(max,Number.isFinite(Number(value))?Number(value):fallback));
  return {
    '--background':color(appearance.background,'#101922'),
    '--foreground':color(appearance.foreground,'#f1f5f7'),
    '--primary':color(appearance.accent,'#b6f16c'),
    '--card':color(appearance.card,'#16212b'),
    '--border':color(appearance.border,'#34424e'),
    '--muted-foreground':color(appearance.mutedText,'#b3bfc9'),
    '--site-font':fonts.includes(appearance.font)?appearance.font:fonts[0],
    '--heading-font':fonts.includes(appearance.headingFont)?appearance.headingFont:fonts[0],
    '--body-size':`${number(appearance.bodySize,16,14,22)}px`,
    '--body-line-height':number(appearance.lineHeight,1.75,1.4,2.2),
    '--cover-height':`${number(appearance.coverHeight,360,210,650)}px`,
    '--cover-opacity':number(appearance.coverOpacity,72,30,100)/100,
    '--image-radius':`${number(appearance.imageRadius,0,0,32)}px`,
    '--logo-background':color(appearance.logoBackground,'#ffffff'),
    '--gallery-columns':Math.round(number(appearance.galleryColumns,2,1,3)),
    '--gallery-fit':appearance.galleryFit==='cover'?'cover':'contain',
    '--gallery-ratio':['4 / 3','3 / 2','1 / 1','auto'].includes(appearance.galleryRatio)?appearance.galleryRatio:'4 / 3',
    '--page-width':`${Math.max(900,Math.min(1600,Number(appearance.width)||1240))}px`,
  } as CSSProperties;
}
