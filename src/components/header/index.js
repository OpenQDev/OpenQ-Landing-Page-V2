// @ts-nocheck

import { tw, css } from 'twind/css';
import Typical from 'react-typical';
import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

/* const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 8000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.4,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.8,
            opacity_min: 0.2,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
); */

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        className={tw(
          `text-transparent h-36 w-80 md:h-28 md:w-full bg-clip-text bg-gradient-to-br from-cyan-300 via-purple-500 to-purple-400`,
        )}
        loop={Infinity}
        wrapper="p"
        steps={[
          'Contribute to earn money.',
          1500,
          'Explore atomic contracting.',
          1500,
          'Grow your developer community.',
          1500,
        ]}
      />
    );
  },
  () => true,
); // this line prevent re rendering

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  return (
    <header className={tw(`w-full font-montserrat bg-dark-mode`)}>
      <div className={tw(``)}>{/*  <ParticleBg /> */}</div>
      <div className={tw(`py-16 px-14 sm:px-6 lg:px-8`)}>
        <div className={tw(`text-center my-8 2xl:my-64 ${scrollY > 600 ? `animate-fadeOut` : `animate-fadeIn`}`)}>
          <div className={tw(``)}>
            <div className={tw(`font-bold text-white text-left md:text-center text-4xl md:text-5xl lg:text-7xl`)}>
              Welcome to OpenQ.
            </div>
            <div className={tw(`font-bold text-5xl text-left md:text-center md:text-5xl lg:text-7xl text-white`)}>
              <div className={tw(`pt-5`)}>
                <TypingAnimation />
              </div>
            </div>
          </div>
          <p
            className={tw(
              `mt-10 md:-mt-5 max-w-5xl text-left md:text-center mx-auto text-gray-400 text-2xl lg:text-2xl`,
            )}
          >
            GitHub bounties, payroll streams and accounting for web3 contributors.
          </p>
          <div className={tw(`mt-10 flex flex-row items-center justify-left md:justify-center space-x-4`)}>
            <div className={tw(`hover:scale-125`)}>
              <Link href="https://discord.gg/fMAjZN9cKy" passHref>
                <a target="_blank">
                  <Image className={tw(``)} src="/discord.png" alt="D" width="40%" height="30%" />
                </a>
              </Link>
            </div>

            <div className={tw(`hover:scale-125 pb-1`)}>
              <Link href="https://github.com/OpenQDev" passHref>
                <a target="_blank">
                  <Image className={tw(``)} src="/github-2.png" alt="D" width="25%" height="25%" />
                </a>
              </Link>
            </div>
            <div className={tw(`hover:scale-125 pb-1 pl-1`)}>
              <Link href="https://twitter.com/openqlabs" passHref>
                <a target="_blank">
                  <Image className={tw(``)} src="/twitter-2.png" alt="D" width="30%" height="23%" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
