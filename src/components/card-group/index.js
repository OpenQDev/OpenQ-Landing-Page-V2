import Card from './Card';
import OnScroll from '../utils/OnScroll';
import { tw } from 'twind';

const CardGroup = ({ data, internalMenu }) => {
  return (
    <OnScroll internalMenu={internalMenu} fade='animate-fadeIn'>
      <div className={tw(`flex justify-center`)}>
        <div className={tw(`flex flex-col text-center w-1/2`)}>
          <span className={tw(`pt-12 font-bold text-gray-900 text-3xl`)}>
            {internalMenu === 'org'
              ? 'A Freelance Marketplace made by Developers for Developers'
              : 'A Freelance Marketplace made by Developers for Developers'}
          </span>
          <p className={tw(`pt-4  text-gray-900 text-lg font-normal`)}>
            {internalMenu === 'org'
              ? ' Create tickets for the OpenQ community with very low administrative effort and management intervention'
              : ' Solve open tickets that organisations post on our dashboard, learn new skills and earn money without having to worry about anything other than programming'}
          </p>
        </div>
      </div>
      <div className={tw(`flex justify-center`)}>
        <div
          className={tw(
            `flex flex-col lg:flex-row lg:space-x-10 justify-center pt-16 mx-auto lg:mx-80 text-left max-w-7xl             
          `
          )}
        >
          {data.map((cardData, index) => {
            return <Card key={index} title={cardData.title} SVG={cardData.SVG} body={cardData.body} />;
          })}
        </div>
      </div>
    </OnScroll>
  );
};
export default CardGroup;
