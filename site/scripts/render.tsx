import { renderToStaticMarkup } from 'react-dom/server';
import Home from '../app/page';
import content from '../content/portfolio.json';

export function render() {
  const title = `${content.profile.name} | Aerospace Engineering Portfolio`;
  return '<!doctype html>' + renderToStaticMarkup(<html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>{title}</title><meta name="description" content={`${content.profile.role} Projects in rocket CAD, UAV structures, combat robotics, and simulation. Seeking internships and co-ops.`}/><link rel="icon" href="./favicon.svg"/><link rel="stylesheet" href="./styles.css"/></head><body><Home/></body></html>);
}
