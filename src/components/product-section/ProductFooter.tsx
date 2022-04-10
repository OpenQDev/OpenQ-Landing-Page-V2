import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import Image from 'next/image';
import { Jazzicon } from '@ukstv/jazzicon-react';
import CasesSection from '@/components/cases-section';

const listItems = [
  {
    title: `Permissionless Bounties`,
    description: `Pull requests are a much better mental model for decentralized communities. Our permissionless bounty system integrates directly with GitHub. Once a PR is closed, the developer automatically is eligable to withdraw the escrow.`,
  },
];

const ProductFooter = () => (
  <div className={tw(``)}>
    <div className={tw(`bg-dark-mode -mt-1 lg:mx-20 lg:rounded-b-2xl`)}>
      <section className={tw(`font-montserrat mx-10 mx-auto lg:mx-60`)}>
        <CasesSection />
      </section>
    </div>
  </div>
);

export default ProductFooter;
