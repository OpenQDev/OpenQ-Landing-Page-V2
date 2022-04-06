import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';
import Particles from 'react-particles-js';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Wave from 'react-wavify';
import Link from 'next/link';

const headerStyle = css`
  min-height: calc(100vh - 6rem);
`;

const ParticleBg = () => (
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
);

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
      <ParallaxProvider>
        <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
          <ParticleBg />
        </div>
        <div className={tw(`py-16 px-14 sm:px-6 lg:px-8`)}>
          <div className={tw(`text-center my-8 2xl:my-64 ${scrollY > 600 ? `animate-fadeOut` : `animate-fadeIn`}`)}>
            <h1 className={tw(`font-bold text-5xl text-left md:text-center md:text-5xl lg:text-7xl text-white`)}>
              <span
                className={tw(
                  `text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-purple-500 to-purple-400`,
                )}
              >
                Collaborate with
              </span>{' '}
              <span className={tw(`font-bold`)}>OpenQ</span>
            </h1>
            <p className={tw(`mt-10 max-w-5xl text-left md:text-center mx-auto text-gray-400 text-2xl lg:text-2xl`)}>
              Web3 payroll, benefits, accounting, HR and more to manage your growing team, all in one place.
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
      </ParallaxProvider>
    </header>
  );
};

export default Header;
