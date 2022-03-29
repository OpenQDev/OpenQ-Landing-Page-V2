import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import BountySection from './BountySection';
import StreamSection from './StreamSection';
import AccountingSection from './AccountingSection';

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

const ProductSection = () => (
  <div>
    <section className={tw(`font-montserrat pt-28`)}>
      <div className={tw(`bg-white`)}>
        <div className={tw(`mb-16 mx-10 mx-auto`)}>
          <h2 className={tw(`text-base pb-2 text-purple-700 font-semibold tracking-wide uppercase`)}>Products</h2>
          <p
            className={tw(
              `text-4xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600`,
            )}
          >
            The Future of Work Stack
          </p>
        </div>
        <BountySection />
        <StreamSection />
        <AccountingSection />
      </div>
    </section>
  </div>
);

export default ProductSection;
