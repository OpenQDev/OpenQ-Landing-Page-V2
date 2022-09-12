import Typical from 'react-typical';
import { tw } from 'twind';
import React from 'react';

const TypingAnimation = ({ text }) => {
  return (
    <Typical
      className={tw(
        `text-transparent h-36 w-60 md:h-28 lg:h-44 xl:h-28 md:w-full bg-clip-text bg-gradient-to-br from-cyan-300 via-purple-500 to-purple-400`
      )}
      loop={1}
      wrapper='p'
      steps={[1500, text[0], 1500, text[1]]}
    />
  );
};

export default React.memo(TypingAnimation, (currentProp, prevProp) => {
  const currentText = currentProp.text;
  const prevText = prevProp.text;
  return currentText[0] === prevText[0] && currentText[1] === prevText[1];
});
