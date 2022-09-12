import { tw } from 'twind';

const Card = ({ SVG, title, body }) => {
  return (
    <div className={tw(`lg:w-5/12`)}>
      <div className={tw(`p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 w-min`)}>
        <SVG />
      </div>
      <h2 className={tw(`pt-3 font-semibold text-2xl lg:text-3xl`)}>{title}</h2>
      <div className={tw(`text-gray-400 font-semibold text-xl pt-2`)}>{body}</div>
    </div>
  );
};

export default Card;
