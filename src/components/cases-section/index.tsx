import { tw } from 'twind';
import Particles from 'react-particles-js';
import Image from 'next/image'
import Arrow from '@/constants/svg/arrow.svg';
import Link from 'next/link'


const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
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

const articles = [
  {
    title: `The Legend of the Code Vending Machine`,
    link: `https://medium.com/openqdev/the-legend-of-the-code-vending-machine-b30d3d573c4f`,
    desc: `Why no code is still a no go`,
    image: `/images/no-code.jpeg`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Trust me bro`,
    link: `https://medium.com/openqdev/trust-me-bro-8fd8cf0a0e11`,
    desc: `How to get along with people you’ve never met`,
    image: `/images/trust-me.jpeg`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Web 2.0 DAO — Part I`,
    link: `https://medium.com/openqdev/web-2-0-dao-part-i-4cec53dd0ec3`,
    desc: `How I’d (Fail) To Build a DAO in 2010`,
    image: `/images/no-dao.jpeg`,
    alt: `Proident pariatur est.`,
  },
];

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-dark-mode relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}></div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Read more about us</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          We are about to change the way people work together
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                <Link href={article.link} passHref>
                  <a target="_blank">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                  </a>
                  </Link>
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm font-bold text-gray-700 text-center pb-1`)}>{article.title}</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.desc}</p>
                </div>
              </div>
            ))}
           
          <Link href=" https://medium.com/openqdev">
              <a target="_blank" className={tw(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-white cursor-pointer z-30 hover:text-purple-600`,
              )}>
            
              See all articles
              <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} />
              </a>
          </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
