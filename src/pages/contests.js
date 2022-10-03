// @ts-nocheck
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { tw } from 'twind';
import Header from '@/components/header';
import ProductSection from '@/components/product-section';
import CardGroup from '@/components/card-group';
import Footer from '@/components/footer';
import FAQ from '@/components/faq';
import Wave from 'react-wavify';
import Navigation from '@/components/navigation';
import Add from '@/components/svg/add';
import { useState, useEffect } from 'react';
import StreamSection from '@/components/product-section/StreamSection';
import AccountingSection from '@/components/product-section/AccountingSection';
import MockBountyList from '@/components/header/MockBountyList';

export default function Home() {
  const [internalMenu, setInternalMenu] = useState('org');
  const [contestPage, setContestPage] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const prs = [
    {
      url: 'https://github.com/OpenQDev/OpenQ-Frontend/pull/454',
      title: 'Super fluid #454',
      description: 'FlacoJones merged 20 commits in from Johnny-V:master',
      scrollY,
      fade: '',
    },
    {
      url: 'https://github.com/snapshot-labs/stamp/pull/12',
      title: 'Fetches ENS Avatar URL from on-chain using ethers.js ENS methods #12',
      description: 'bonustrack merged 7 commits into snapshot-labs:master from FlacoJones:master',
      scrollY,
      fade: '',
    },
    {
      url: 'https://github.com/snapshot-labs/stamp/pull/20',
      title: 'feat: add Jazzicon resolver #20',
      description: 'bonustrack merged 5 commits into master from sekhmet/jazzicon',
      scrollY,
      fade: '',
    },
    {
      url: 'https://github.com/snapshot-labs/stamp/pull/18',
      title: 'feat: add SelfID resolver #18',
      description: 'bonustrack merged 3 commits into master from sekhmet/selfid',
      scrollY,
      fade: '',
    },
  ];
  const cardSectionDataOrg = [
    {
      title: 'Programmable Payouts',
      SVG: Add,
      body:
        "Define the contests according to your requirements. Pay developers directly after you've merged their submission on Github without extra effort. ",
    },
    {
      title: 'Hackathon Tooling Services',
      SVG: Add,
      body:
        "We'll keep an eye out for copy paste submissions from older hackathons in our database, and take care of the things you shouldn't bother with.",
    },
    {
      title: 'Accounting Included',
      SVG: Add,
      body:
        '(Coming soon) With our accounting system, each disbursement will automatically trigger a developer invoice to resolve your tax issues.',
    },
  ];
  const cardSectionDataDev = [
    {
      title: 'Diversity Inspires Challenge',
      SVG: Add,
      body:
        'We curate contests that meet your requirements or find new exciting tasks that take you to the next as software developer.',
    },
    {
      title: 'Enhance your Reputation',
      SVG: Add,
      body:
        'Every contest you enter, win or not, expands your profile with on-chain attestations that open up new opportunities.',
    },
    {
      title: 'Boostrap with OpenQ',
      SVG: Add,
      body:
        'We will continuously report on projects that have emerged from our contests and support you through our partner network.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);
  return (
    <div>
      <Head>
        <link rel='icon' href='/logo.png' />
      </Head>
      <NextSeo title='OpenQ' description='' />

      <main>
        <Navigation />
        <Header pageVersionHookInstance={[internalMenu, setInternalMenu]} contest={contestPage} />
        <div className={tw(`w-full rotate-180 -mt-2`)}>
          <Wave
            fill='#121212'
            paused={false}
            options={{
              height: 30,
              amplitude: 80,
              speed: 0.1,
              points: 3,
            }}
          />
        </div>
        <MockBountyList internalMenu={internalMenu} contest={true} />
        <div className={tw(`flex justify-center`)}>
          <div className={tw(`max-w-8xl w-full px-4`)}>
            <CardGroup
              internalMenu={internalMenu}
              contest={contestPage}
              data={internalMenu === 'org' ? cardSectionDataOrg : cardSectionDataDev}
            />
            <ProductSection prs={prs} internalMenu={internalMenu} contest={true} />
            <div className={tw(`py-16`)}></div>
            {/* <FAQ /> */}
          </div>
        </div>

        {/*<ListSection />*/}
        {/*<FeatureSection /> */}
        {/*         <SocialProof /> */}
      </main>
      <Footer />
    </div>
  );
}
