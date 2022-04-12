// @ts-nocheck

import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import BountySection from './BountySection';
import StreamSection from './StreamSection';
import AccountingSection from './AccountingSection';
import ProductFooter from './ProductFooter';
import { useState } from 'react';

const listItems = [
  {
    title: `How can I mint a bounty?`,
    description: `Head to https://app.openq.dev/ and click on the "Mint Bounty" button. Paste in any GitHub Issue URL of an open repo (we are planning to support private repos later as well), then click on "Mint Bounty". Make sure your on Polygon. Thats it! If you have any problems contact us on Discord.`,
  },
  {
    title: `How can I withdraw a bounty?`,
    description: `To withdraw a bounty head to the dedicated bounty page which you can find by searching the issue. Go to the withdraw page and connect your GitHub account. Next click on claim if your PR got merged and the issue got automatically closed, you should successfully be able to claim it. `,
  },
  {
    title: `How can I refund a bounty?`,
    description: `Head to the dedicated bounty page which you can find by searching the issue. Go to the refund page and connect your wallet. You should be able to get your money back if the deposit period has exceeded 30 days.`,
  },
  {
    title: `How many days is a bounty that I funded locked?`,
    description: `At the moment all bounties are locked for 30 days. We are planning to offer customizable lock up timers soon.`,
  },
  {
    title: `What if the mantainer steals my code and claims back his own bounty?`,
    description: `So far it has not happened that a mantainer collects the code without paying it. We plan to be transparent about this and report organizations that do not treat their contributors fairly. However, we are already working on a plagiarism algorithm that detects such cases and reports them to the smart contract so that the contributor gets the money anyway.`,
  },
  {
    title: `What if the mantainer doesn't accept my code or wants me to change it even though it wasnt discussed?`,
    description: `We know that cooperation can sometimes be difficult, especially for small tasks, and that sometimes work is required that is not justified. We are working on an evaluation system to deal with this in a transparent way. Please let us know if this should be the case, so that we can draw attention to it in the community. In the future we are planning a decentralized dispute resolution system via kleros courts to activate independent mediators.`,
  },
  {
    title: `Do you support as well bounties for something else than contributing code?`,
    description: `Currently we only support bounty creation from GitHub issues. Of course, copywriter tasks, or design concepts can also be laid out very well via Github issues, but we don't want to complicate this unnecessarily and offer teams solutions that are unopinioated. Let us know which project management software you would like to have connected to an escrow system and we will work on it next!`,
  },
];

const FAQ = () => {
  const [clicked, setClicked] = useState([]);

  const changeItemStatus = (index) => {
    if (clicked[index]) {
      let old = clicked;
      old[index] = false;
      setClicked([...old]);
    } else {
      let old = clicked;
      old[index] = true;
      setClicked([...old]);
    }
  };

  return (
    <div>
      <section className={tw(`font-montserrat pt-28 pb-16`)}>
        <h1 className={tw(`text-center font-bold text-2xl pb-24`)}>Frequently Asked Questions</h1>
        {listItems.map((item, index) => {
          return (
            <div key={index} className={tw(`-mt-14 pb-5 px-6 lg:px-32 xl:px-64 pb-20`)}>
              <div onClick={() => changeItemStatus(index)} className={tw(`border-b border-gray-800 lg:px-20`)}>
                <div className={tw(`flex flex-row justify-between items-center`)}>
                  <h2 className={tw(`p-3 text-left font-semibold text-gray-700 text-xl pb-8`)}>{item.title}</h2>
                  {clicked[index] ? (
                    <button className={tw(`pb-5`)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={tw(`w-6 h-6`)}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <button className={tw(`pb-5`)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={tw(`w-6 h-6`)}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                  )}
                </div>
                {!clicked[index] ? null : (
                  <p className={tw(`p-3 -pt-5 pb-10 text-left text-gray-700 text-md`)}>{item.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FAQ;
