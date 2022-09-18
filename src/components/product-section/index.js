// @ts-nocheck

import { useEffect, useState } from 'react';
import { tw } from 'twind';
import BountySection from './BountySection';
import Add from '../svg/add';
import CardGroup from '../card-group';
import MockContest from './MockContest';
import MockPr from './MockPr';
/*
const listItems = [
  {
    title: `Permissionless Bounties`,
    description: `Pull requests are a much better mental model for decentralized communities. Our permissionless bounty system integrates directly with GitHub. Once a PR is closed, the developer automatically is eligable to withdraw the escrow.`,
  },
  {
    title: `Token Streams`,
    description: `Bounties are good for making initial connections and getting involved in projects. After that, you want to create stability. Streams enable decentralized payroll systems that are directly integrated into our accounting layer. .`,
  },
  {
    title: `Collaboration Pools`,
    description: `Building trust within a working group when it comes to fair distribution is difficult. Our decentralized escrow system creates trust and makes it possible to settle disputes via kleros courts.`,
  },
];
*/
const ProductSection = ({ internalMenu }) => {
  const cardSectionData = [
    { title: 'Release Payment automatically after merging PR', SVG: Add, body: 'Lorme ipsum' },
    { title: 'Release Payment automatically after merging PR', SVG: Add, body: 'Lorme ipsum' },
    { title: 'Release Payment automatically after merging PR', SVG: Add, body: 'Lorme ipsum' },
  ];

  const [scrollY, setScrollY] = useState(0);

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
      <section className={tw(`font-montserrat pt-28`)}>
        <div className={tw(`bg-white`)}>
          <BountySection scrollY={scrollY} internalMenu={internalMenu} />
          <div className={tw(`flex-col flex items-center content-center`)}>
            <h2 className={tw(`py-8 lg:py-16 px-8 font-bold text-center text-xl lg:w-3/4 xl:w-2/5 text-gray-500`)}>
              {internalMenu === 'org' && 'Not the right fit?'}{' '}
              <span className={tw(`text-gray-900`)}>OpenQ Contests </span>
              {internalMenu === 'org' && 'help you to engage with your existing developer community.'}
            </h2>

            <div
              className={tw(
                `w-5/6 md:w-2/3  rounded-2xl overflow-hidden opacity-0  ${
                  scrollY > 3000 && 'animate-fadeIn opacity-1'
                } `
              )}
            >
              <MockContest
                repo={'honey-labs/honey-frontend'}
                title={'staking public goods as a service'}
                budget={'$7000'}
                avatarUrl={'https://avatars.githubusercontent.com/u/92924948?s=60&v=4'}
                days={10}
                scrollY={scrollY}
              />
              <MockContest
                repo={'openqdev/openq-frontend'}
                title={'🌳 openq [dys/u]topia hackathon'}
                budget={'$10,000'}
                url={'https://github.com/openqdev/openq-frontend'}
                avatarUrl={'https://avatars.githubusercontent.com/u/77402538?s=200&v=4'}
                days={4}
                scrollY={scrollY}
              />
              <MockContest
                repo={'snapshot-labs/snapshot'}
                title={'open source interface hacking'}
                budget={'$8000'}
                url={'https://github.com/snapshot-labs/snapshot'}
                avatarUrl={'https://avatars.githubusercontent.com/u/72904068?s=200&v=4'}
                days={17}
                scrollY={scrollY}
              />
            </div>
          </div>

          {internalMenu === 'org' && (
            <div className={tw(`flex-col flex items-center content-center`)}>
              <h2 className={tw(`py-8 lg:py-16 pl-2 font-bold text-center text-xl lg:w-3/4 xl:w-2/5 text-gray-500`)}>
                <span className={tw(`text-gray-900`)}>See it for yourself</span> with PRs our community completed.
              </h2>

              <div
                className={tw(
                  `w-5/6 border border-gray-700 rounded-2xl opacity-0 ${scrollY > 3500 && 'animate-fadeIn opacity-1'} `
                )}
              >
                <MockPr
                  url={'https://github.com/OpenQDev/OpenQ-Frontend/pull/454'}
                  title={'Super fluid #454'}
                  description={'FlacoJones merged 20 commits in from Johnny-V:master'}
                  scrollY={scrollY}
                  fade={''}
                />
                <MockPr
                  url={'https://github.com/snapshot-labs/stamp/pull/12'}
                  title={'Fetches ENS Avatar URL from on-chain using ethers.js ENS methods #12'}
                  description={'bonustrack merged 7 commits into snapshot-labs:master from FlacoJones:master'}
                  scrollY={scrollY}
                  fade={'animate-fadeIn'}
                />
                <MockPr
                  url={'https://github.com/snapshot-labs/stamp/pull/20'}
                  title={'feat: add Jazzicon resolver #20'}
                  description={'bonustrack merged 5 commits into master from sekhmet/jazzicon'}
                  scrollY={scrollY}
                  fade={'animate-fadeIn'}
                />
                <MockPr
                  url={'https://github.com/snapshot-labs/stamp/pull/18'}
                  title={'feat: add SelfID resolver #18'}
                  description={'bonustrack merged 3 commits into master from sekhmet/selfid'}
                  styles={'border-none'}
                  scrollY={scrollY}
                  fade={'animate-fadeIn'}
                />
              </div>
            </div>
          )}
          <div className={tw(`flex-col flex items-center content-center`)}>
            <h2 className={tw(`py-8 lg:py-16 pl-2 font-bold text-center text-xl lg:w-3/4 xl:w-2/5 text-black`)}>
              "Under the hood"
            </h2>

            <CardGroup data={cardSectionData} fadeIn={scrollY > 4000} />
          </div>
          {/* <ProductFooter scrollY={scrollY} /> */}
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
