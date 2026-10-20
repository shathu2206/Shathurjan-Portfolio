import assert from 'node:assert/strict';
import {content,render} from '../.build/render.js';

// Clearing optional media in Pages CMS removes its key entirely.
delete content.settings.branding.logo;
delete content.settings.branding.logoLayout;
assert(!render().includes('class="brand-logo"'));
assert(render().includes('class="monogram"'));
content.settings.branding.logo='assets/space-apps-logo.png';
assert(render().includes('class="brand-logo"'));
delete content.settings.branding.logo;
assert(!render().includes('class="brand-logo"'));

const copy=content.profile.homepage;
const originalNavigation=JSON.stringify(content.settings.navigation);
content.settings.home.showDirectory=true;
content.settings.sections=['intro','work','contact'];
copy.exploreLabel='My portfolio heading';
copy.exploreDescription='My portfolio description';
copy.links=[{label:'Reach me first',target:'contact'},{label:'Selected engineering',target:'work'},{label:'Hidden gallery',target:'gallery'},{label:'Invalid route',target:'invalid'}];
let html=render();
assert(html.includes('My portfolio heading'));
assert(html.includes('My portfolio description'));
assert(html.indexOf('Reach me first')<html.indexOf('Selected engineering'));
assert(!html.includes('Hidden gallery'));
assert(!html.includes('Invalid route'));
assert.equal(JSON.stringify(content.settings.navigation),originalNavigation);
delete copy.exploreLabel;
delete copy.exploreDescription;
delete copy.links;
html=render();
assert(!html.includes('My portfolio heading'));
assert(!html.includes('My portfolio description'));
assert(!html.includes('Reach me first'));
console.log('PASS: removed/replaced header logos; independent CMS homepage headings and ordered link titles; empty optional fields and hidden/invalid destinations.');
