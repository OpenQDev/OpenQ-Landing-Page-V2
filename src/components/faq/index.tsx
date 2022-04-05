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
    title: `How can I withdraw a bounty?`,
    description: `Pull requests are a much better mental model for decentralized communities. Our permissionless bounty system integrates directly with GitHub. Once a PR is closed, the developer automatically is eligable to withdraw the escrow.`,
  },
  {
    title: `How can I refund a bounty?`,
    description: `Bounties are good for making initial connections and getting involved in projects. After that, you want to create stability. Streams enable decentralized payroll systems that are directly integrated into our accounting layer. .`,
  },
  {
    title: `How many days is a bounty that I funded locked?`,
    description: `Building trust within a working group when it comes to fair distribution is difficult. Our decentralized escrow system creates trust and makes it possible to settle disputes via kleros courts.`,
  },
  {
    title: `What if the mantainer steals my code and claims back his own bounty?`,
    description: `Building trust within a working group when it comes to fair distribution is difficult. Our decentralized escrow system creates trust and makes it possible to settle disputes via kleros courts.`,
  },
  {
    title: `What if the mantainer doesn't accept my code or wants me to change it even though it wasnt discussed?`,
    description: `Building trust within a working group when it comes to fair distribution is difficult. Our decentralized escrow system creates trust and makes it possible to settle disputes via kleros courts.`,
  },
  {
    title: `Do you support as well bounties for something else than contributing code?`,
    description: `Building trust within a working group when it comes to fair distribution is difficult. Our decentralized escrow system creates trust and makes it possible to settle disputes via kleros courts.`,
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
            <div key={index} className={tw(`-mt-14 pb-5 px-6 lg:px-64 pb-20`)}>
              <div className={tw(`border-b border-gray-800 px-20`)}>
                <div className={tw(`flex flex-row justify-between items-center`)}>
                  <h2 className={tw(`p-3 text-left font-semibold text-gray-700 text-xl pb-8`)}>{item.title}</h2>
                  {clicked[index] ? (
                    <button onClick={() => changeItemStatus(index)}>
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
                    <button onClick={() => changeItemStatus(index)}>
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
