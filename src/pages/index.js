// @ts-nocheck
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { tw } from 'twind';
import Header from '@/components/header';
import ProductSection from '@/components/product-section';
import Footer from '@/components/footer';
import FAQ from '@/components/faq';
import Wave from 'react-wavify';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NextSeo title="OpenQ" description="" />

      <main>
        <Navigation />
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

        <FAQ />
        {/* <ListSection /> */}
        {/*  <FeatureSection /> */}
        {/*         <SocialProof /> */}
      </main>
      <Footer />
    </div>
  );
}
