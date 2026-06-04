import type { Metadata } from 'next';
import AnchorPageClient from './AnchorPageClient';

export const metadata: Metadata = {
  title: 'Anchor | AnimusLab',
  alternates: {
    canonical: '/anchor',
  },
};

export default function Page() {
  return <AnchorPageClient />;
}
