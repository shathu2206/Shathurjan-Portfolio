import type { Metadata } from 'next';
import content from '../content/portfolio.json';
import './globals.css';
export const metadata: Metadata = {
  title: `${content.profile.name} | Aerospace Engineering Portfolio`,
  description: `${content.profile.role} Explore projects in rocket CAD, UAV structures, combat robotics, and simulation. Seeking internships and co-ops.`,
  icons: { icon: `${process.env.NODE_ENV === 'production' ? '/Shathurjan-Portfolio' : ''}/favicon.svg` },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
