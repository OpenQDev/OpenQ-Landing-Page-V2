import { NextSeo } from 'next-seo';
import { tw } from 'twind';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import ProductSection from '@/components/product-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import Wave from 'react-wavify';
import Globe from '../components/globe/globe';

export default function Home() {
  return (
    <Page>
      <NextSeo title="OpenQ" description="" />

      <main>
        <Header />
        <div className={tw(`w-full rotate-180 -mt-2`)}>
          <Wave
            fill="#121212"
            paused={false}
            options={{
              height: 30,
              amplitude: 80,
              speed: 0.1,
              points: 3,
            }}
          />
        </div>
        <ProductSection />
        {/*  <ListSection /> */}
        {/* <FeatureSection /> */}
        {/* <CasesSection /> */}
        {/*  <SocialProof /> */}
      </main>
      <Footer />
    </Page>
  );
}
