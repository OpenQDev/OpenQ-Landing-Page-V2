import Card from './Card';
import { tw } from 'twind';

const CardGroup = ({ data, fadeIn }) => {
  return (
    <div className={tw(`flex justify-center`)}>
      <div
        className={tw(
          `flex flex-col lg:flex-row lg:space-x-10 justify-center pt-16 mx-auto lg:mx-80 text-left max-w-7xl invisible ${
            fadeIn && 'animate-fadeIn visible'
          }`
        )}
      >
        {data.map((cardData, index) => {
          return <Card key={index} title={cardData.title} SVG={cardData.SVG} body={cardData.body} />;
        })}
      </div>
    </div>
  );
};
export default CardGroup;
