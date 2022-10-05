import Typical from 'react-typical';
import { tw } from 'twind';
import React from 'react';

const TypingAnimation = ({ text }) => {
  return (
    <div
      className={tw(
        `w-40 md:w-full text-transparent h-40 min-h-20 w-96 md:w-full md:h-40 lg:h-48 xl:h-48 2xl:h-28 md:w-full bg-clip-text bg-gradient-to-br from-cyan-300 via-purple-500 to-purple-400`
      )}
    >
      {/*  <Typical
      className={tw(
        `text-transparent h-36 min-h-20 w-60 md:w-full  md:h-28 lg:h-44 xl:h-28 md:w-full bg-clip-text bg-gradient-to-br from-cyan-300 via-purple-500 to-purple-400`
      )}
      loop={1}
      wrapper='p'
      steps={[1500, text[0], 1500, text[1]]}
    /> */}
      {text}
    </div>
  );
};

export default React.memo(TypingAnimation, () => true);
