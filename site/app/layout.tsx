/* oxlint-disable next/no-sync-scripts -- Apply the saved theme before first paint in these static documents. */
import {ThemePicker} from '../components/theme-picker';
import {ImageFilters} from '../components/image-filters';
import type { Metadata } from 'next';
import content from '../content/portfolio';
import {themeStyle} from '../lib/theme';
import './globals.css';
export const metadata: Metadata = {
  title: `${content.profile.name} | ${content.settings.metadata.title}`,
  description: content.settings.metadata.description,
  icons: { icon: `${process.env.NODE_ENV === 'production' ? '/Shathurjan-Portfolio' : ''}/favicon.svg` },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" style={themeStyle()}><head><script src={`${process.env.NODE_ENV === 'production' ? '/Shathurjan-Portfolio' : ''}/theme.js`}/><ImageFilters/></head><body>{children}<ThemePicker/><script src={`${process.env.NODE_ENV === 'production' ? '/Shathurjan-Portfolio' : ''}/site-navigation.js`} defer/><script src={`${process.env.NODE_ENV === 'production' ? '/Shathurjan-Portfolio' : ''}/intro-carousel.js`} defer/></body></html>;
}
