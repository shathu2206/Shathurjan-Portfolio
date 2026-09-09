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
  return <html lang="en" style={themeStyle()}><body>{children}</body></html>;
}
