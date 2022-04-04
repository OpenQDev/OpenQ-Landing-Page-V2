// @ts-nocheck

import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import Image from 'next/image';
import { Jazzicon } from '@ukstv/jazzicon-react';

const listItems = [
  {
    title: `Permissionless Bounties`,
    description: `Pull requests are a much better mental model for decentralized communities. Our permissionless bounty system integrates directly with GitHub. Once a PR is closed, the developer automatically is eligable to withdraw the escrow.`,
  },
];

const StreamSection = ({scrollY}) => (
  <div className={tw(`bg-dark-mode lg:mx-4 lg:rounded-t-2xl `)}>
    <section className={tw(`font-montserrat pt-16 mx-10 mx-auto lg:mx-60`)}>
      <div className={tw(`flex flex-col justify-center`)}>
        <div className={tw(`rounded-2xl text-xs w-min bg-gradient-to-br from-pink-600 to-purple-500`)}>
          <div className={tw(`ml-1 mr-1 rounded-2xl bg-dark-mode`)}>
            <div
              className={tw(
                ` px-5 py-1 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-300 truncate`,
              )}
            >
              Coming Soon
            </div>
          </div>
        </div>
        <p
          className={tw(
            `text-4xl lg:text-7xl break-normal pt-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-300 `,
          )}
        >
          Token Streams
        </p>
      </div>
      <div className={tw(`flex flex-row pt-5 space-x-3 items-center`)}>
        <div className={tw(`border border-2 -ml-2 rounded-lg py-1 px-2 text-sm border-gray-500 font-mono text-gray-500`)}>$_</div>
        <h2 className={tw(`text-md pl-2 font-mono text-gray-500`)}>create token stream</h2>
      </div>
      <div className={tw(`flex flex-row -ml-2 pt-3 items-center`)}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="22"
            width="28"
            aria-hidden="true"
            className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
          >
            <circle cx="14" cy="11" fill="#000000" r="5" stroke="#465061" strokeWidth="2" />
          </svg>
        </div>
        <div className={tw(`pl-5`)}>
          <div className={tw(`flex flex-row items-center border rounded-2xl border-gray-500 py-2 px-4 space-x-1`)}>
            <div>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                fill="#79818e"
                data-view-component="true"
              >
                <path
                  fillRule="evenodd"
                  d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                />
              </svg>
            </div>
            <p className={tw(`pl-2 text-md font-base font-mono text-left text-gray-500`)}>add new contributor</p>
          </div>
        </div>
      </div>
      <div className={tw(``)}>
        <div
          className={tw(
            `border-l ml-1 pt-5 pl-8 border-gray-400 pb-8 lg:grid lg:grid-cols-6 lg:gap-4 px-3 lg:pb-10 lg:pt-10`,
          )}
        >
          <div className={tw(`lg:col-span-2`)}>
            <div className={tw(`border border-white rounded-xl ${scrollY > 2500 ? 'animate-fadeInRight' : 'invisible'}`)}>
              <div className={tw(`px-5 text-center py-8`)}>
                <div className={tw(`font-bold text-xl text-white pb-3`)}>Create new Stream</div>
                <div className={tw(`border rounded-2xl font-semibold text-left py-1 pl-5 text-lg text-gray-500`)}>
                  0x90F7...
                </div>
                <div className={tw(`pt-3 pb-1`)}>
                  <div
                    className={tw(`border rounded-2xl font-semibold text-center py-1 text-lg text-gray-900 bg-white`)}
                  >
                    Add socials
                  </div>
                </div>
                <div className={tw(`pt-3 pb-1`)}>
                  <div
                    className={tw(
                      `rounded-2xl w-full py-2 font-bold cursor-pointer text-white border border-pink-300 bg-pink-700 bg-opacity-10 hover:bg-pink-700 hover:bg-opacity-30 hover:text-white`,
                    )}
                  >
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            className={tw(
              `pt-8 pb-2 pl-6 text-lg font-semibold text-left text-gray-400 lg:text-3xl lg:mx-10 lg:col-span-4 ${scrollY > 2500 ? 'animate-fadeInLeft' : 'invisible'}`,
            )}
          >
            Tokens Streams enable the integration of
            <span className={tw(`pt-2 pb-2 pl-2 font-semibold text-left text-lg lg:text-3xl text-white pt-2`)}>
              decentralized payroll systems{' '}
            </span>
            into our accounting layer. Bounties are good for making initial connections and getting involved in
            projects. After that, you want to create stability.
          </p>
        </div>
      </div>
      <div className={tw(`flex flex-row -ml-2 items-center`)}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="22"
            width="28"
            aria-hidden="true"
            className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
          >
            <path d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z" fill="#465061" />
            <circle cx="14" cy="11" fill="black" r="5" stroke="#465061" strokeWidth="2" />
          </svg>
        </div>
        <p className={tw(`pl-2 text-md font-base font-mono text-left text-gray-500`)}>
          add payrolls in any ERC-20/ Polygon native token
        </p>
      </div>
      <div className={tw(`border-l ml-1 border-gray-400 pb-9`)} />
      <div className={tw(`flex flex-row -ml-2 items-center`)}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="22"
            width="28"
            aria-hidden="true"
            className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
          >
            <path d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z" fill="#465061" />
            <circle cx="14" cy="11" fill="black" r="5" stroke="#465061" strokeWidth="2" />
          </svg>
        </div>
        <p className={tw(`pl-2 text-md font-base font-mono text-left text-gray-500`)}>
          facilitate payment requests for your contributors or request your invoiced payment to DAOs{` `}
        </p>
      </div>
      <div className={tw(`border-l ml-1 border-gray-400 pb-9 lg:grid lg:grid-cols-6 lg:gap-4 px-3 lg:pb-10 lg:pt-10`)}>
        <p
          className={tw(
            `pt-10 pb-2 pl-6 text-lg font-semibold text-left text-gray-400 pt-2 lg:text-3xl lg:mx-10 lg:col-span-4 lg:pt-12 ${scrollY > 3100 ? 'animate-fadeInRight' : 'invisible'}`,
          )}
        >
          Our web3 mentality
          <span className={tw(`pt-2 pb-2 pl-2 font-semibold text-left text-lg lg:text-3xl text-white pt-2`)}>
            of onboarding and offboarding team members{' '}
          </span>
          supported by permissionless payroll streams.
        </p>
        <div className={tw(`pt-8 pl-8 lg:col-span-2 ${scrollY > 3100 ? 'animate-fadeInLeft' : 'invisible'}`)}>
          <div className={tw(`border border-white rounded-xl`)}>
            <div className={tw(`px-5 text-center py-8`)}>
              <div className={tw(`font-bold text-xl text-white pb-3`)}>Monthly Disbursments</div>
              <div className={tw(`flex flex-row justify-between text-white`)}>
                <div className={tw(`flex flex-row space-x-3 items-center`)}>
                  <div style={{ width: `25px`, height: `25px` }}>
                    <Jazzicon address="0xBAc675C310721717Cd4A37F6cbeA1F081b1C2a07" />
                  </div>
                  <div>
                    <p className={tw(``)}>Mike</p>
                  </div>
                </div>

                <div className={tw(`flex flex-row items-center space-x-3`)}>
                  <div>
                    <Image src="/dai.png" alt="OpenQ Logo" width="30%" height="30%" />
                  </div>
                  <div className={tw(``)}>900 DAI</div>
                </div>
              </div>
              <div className={tw(`flex flex-row justify-between text-white`)}>
                <div className={tw(`flex flex-row space-x-3 items-center`)}>
                  <div style={{ width: `25px`, height: `25px` }}>
                    <Jazzicon address="0xHV2675C314221717Cd4A37F6cbeA1F081b1C2a07" />
                  </div>
                  <div>
                    <p className={tw(``)}>Melany</p>
                  </div>
                </div>

                <div className={tw(`flex flex-row items-center space-x-3`)}>
                  <div>
                    <Image src="/dai.png" alt="OpenQ Logo" width="30%" height="30%" />
                  </div>
                  <div className={tw(``)}>650 DAI</div>
                </div>
              </div>
              <div className={tw(`flex flex-row justify-between text-white`)}>
                <div className={tw(`flex flex-row space-x-3 items-center`)}>
                  <div style={{ width: `25px`, height: `25px` }}>
                    <Jazzicon address="0xCB1475C310721717Cd4A37F6cbeA1F081b1C2a07" />
                  </div>
                  <div>
                    <p className={tw(``)}>Chris</p>
                  </div>
                </div>

                <div className={tw(`flex flex-row items-center space-x-3`)}>
                  <div>
                    <Image src="/dai.png" alt="OpenQ Logo" width="30%" height="30%" />
                  </div>
                  <div className={tw(``)}>500 DAI</div>
                </div>
              </div>
              <div className={tw(`flex flex-row justify-between text-white`)}>
                <div className={tw(`flex flex-row space-x-3 items-center`)}>
                  <div style={{ width: `25px`, height: `25px` }}>
                    <Jazzicon address="0xFAc675C310721717Cd4A37F6cbeA1F081b1C2a07" />
                  </div>
                  <div>
                    <p className={tw(``)}>Stephanie</p>
                  </div>
                </div>

                <div className={tw(`flex flex-row items-center space-x-3`)}>
                  <div>
                    <Image src="/dai.png" alt="OpenQ Logo" width="30%" height="30%" />
                  </div>
                  <div className={tw(``)}>450 DAI</div>
                </div>
              </div>
              <div className={tw(`flex flex-row justify-between text-white`)}>
                <div className={tw(`flex flex-row space-x-3 items-center`)}>
                  <div style={{ width: `25px`, height: `25px` }}>
                    <Jazzicon address="0x90F79bf2BB2c4f873465E785982E1f101E93b906" />
                  </div>
                  <div>
                    <p className={tw(``)}>Lisa</p>
                  </div>
                </div>

                <div className={tw(`flex flex-row items-center space-x-3`)}>
                  <div>
                    <Image src="/dai.png" alt="OpenQ Logo" width="30%" height="30%" />
                  </div>
                  <div className={tw(``)}>400 DAI</div>
                </div>
              </div>

              <div className={tw(`pt-3 pb-1`)}>
                <div
                  className={tw(
                    `rounded-2xl w-full py-2 font-bold cursor-pointer text-white border border-pink-300 bg-pink-700 bg-opacity-10 hover:bg-pink-700 hover:bg-opacity-30 hover:text-white`,
                  )}
                >
                  Add
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {` `}
      <div className={tw(`flex flex-row -ml-2 items-center`)}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="22"
            width="28"
            aria-hidden="true"
            className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
          >
            <path d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z" fill="#465061" />
            <circle cx="14" cy="11" fill="black" r="5" stroke="#465061" strokeWidth="2" />
          </svg>
        </div>
        <p className={tw(`pl-2 text-md font-base font-mono text-left text-gray-500`)}>
          manage your payouts in our accounting system.{` `}
        </p>
      </div>
      <div className={tw(`border-l ml-1 border-gray-400 pb-9`)} />
      <div className={tw(`flex flex-row -ml-2 items-center`)}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="22"
            width="28"
            aria-hidden="true"
            className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
          >
            <path d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z" fill="#465061" />
            <circle cx="14" cy="11" fill="black" r="5" stroke="#465061" strokeWidth="2" />
          </svg>
        </div>
        <p className={tw(`pl-2 text-md font-base font-mono   text-left text-gray-500`)}>
          automatically generate invoices for all your OpenQ activities as contributor.{` `}
        </p>
      </div>
      <div className={tw(`lg:px-4`)}>
        <div
          className={tw(
            `border-l lg:border-b pl-9 lg:w-1/2 ml-1 lg:-ml-3 lg:rounded-bl-xl border-gray-400 pb-16 lg:pb-9`,
          )}
        />
      </div>
      <div className={tw(`pt-1`)}></div>
      <div className={tw(`flex justify-between`)}>
        <div className={tw(`border-l invisible ml-1 pt-5 pl-8 border-gray-400 pb-8 lg:visible lg:border-dark-mode`)} />
        <div
          className={tw(
            `border-l invisible ml-1 pt-5 pl-8 border-gray-400 pb-8 lg:-ml-8 lg:-scale-x-100 lg:-mt-1 lg:rounded-t-xl lg:visible`,
          )}
        />
        <div className={tw(`border-l invisible ml-1 pt-5 pl-8 border-dark-mode pb-8`)} />
      </div>
    </section>
  </div>
);

export default StreamSection;
