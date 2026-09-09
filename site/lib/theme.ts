import type {CSSProperties} from 'react';
import content from '../content/portfolio';

export function themeStyle():CSSProperties {
  const appearance=content.settings.appearance;
  const color=(value:string,fallback:string)=>/^#[0-9a-f]{6}$/i.test(value)?value:fallback;
  const fonts=['Arial, Helvetica, sans-serif','Georgia, serif','Verdana, sans-serif','monospace'];
  return {
    '--background':color(appearance.background,'#101922'),
    '--foreground':color(appearance.foreground,'#f1f5f7'),
    '--primary':color(appearance.accent,'#b6f16c'),
    '--card':color(appearance.card,'#16212b'),
    '--border':color(appearance.border,'#34424e'),
    '--muted-foreground':color(appearance.mutedText,'#b3bfc9'),
    '--site-font':fonts.includes(appearance.font)?appearance.font:fonts[0],
    '--page-width':`${Math.max(900,Math.min(1600,Number(appearance.width)||1240))}px`,
  } as CSSProperties;
}
