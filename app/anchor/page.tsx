import type { Metadata } from 'next';
import AnchorPageClient from './AnchorPageClient';

export const metadata: Metadata = {
  title: 'Anchor | AnimusLab',
  alternates: {
    canonical: 'https://anchor.animuslab.dev',
  },
};

export default function Page() {
  return <AnchorPageClient />;
}
