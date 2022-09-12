import Card from './Card';
import { tw } from 'twind';

const CardGroup = ({ data }) => {
  return (
    <div
      className={tw(
        `flex flex-col lg:flex-row lg:space-x-10 justify-center pl-1 mx-16 mx-auto lg:mx-80 text-left animate-fadeInTop`
      )}
    >
      {data.map((cardData, index) => {
        return <Card key={index} title={cardData.title} SVG={cardData.SVG} body={cardData.body} />;
      })}
    </div>
  );
};
export default CardGroup;
