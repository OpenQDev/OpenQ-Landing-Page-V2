// @ts-nocheck

import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import Image from 'next/image';

const listItems = [
  {
    title: `Permissionless Bounties`,
    description: `Pull requests are a much better mental model for decentralized communities. Our permissionless bounty system integrates directly with GitHub. Once a PR is closed, the developer automatically is eligable to withdraw the escrow.`,
  },
];

const BountySection = ({ scrollY }) => {
  return (
    <div>
      <div className={tw(`mb-8 mx-10 lg:mx-32 xl:mx-54 2xl:mx-64 mx-auto lg:mb-16`)}>
        <p
          className={tw(
            `text-4xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-500 to-purple-400`,
          )}
        >
          The Future of Work Stack.
        </p>
        <p className={tw(`text-4xl lg:text-7xl font-extrabold tracking-tight text-black`)}>
          Grow your community with atomic contracts and permissionless bounties.
        </p>
      </div>
      <section className={tw(`font-montserrat mx-10 lg:mx-32 xl:mx-54 2xl:mx-64  mx-auto`)}>
        <div className={tw(`flex flex-row space-x-3 items-center pb-3`)}>
          <div
            className={tw(`border border-2 -ml-2 rounded-lg py-1 px-2 text-sm border-gray-500 font-mono text-gray-500`)}
          >
            $_
          </div>
          <h2 className={tw(`text-md font-mono pl-2 text-gray-500`)}>fund issue</h2>
        </div>
        <div className={tw(`flex flex-row space-x-3 items-center`)}>
          <div className={tw(`w-3 h-3 border rounded-full border-gray-400`)} />
          <div className={tw(`pl-5`)}>
            <div className={tw(`flex flex-row items-center border rounded-2xl border-gray-500 py-2 px-4 space-x-1`)}>
              <Image src="/eth-colour.png" alt="OpenQ Logo" width="15%" height="25%" />
              <p className={tw(`pl-2 text-md font-mono font-base text-left text-gray-500`)}>deposit erc-20</p>
            </div>
          </div>
        </div>
        <div className={tw(`pl-1 `)}>
          <div className={tw(`border-l border-gray-400 lg:grid lg:grid-cols-6 lg:gap-4 px-3 lg:pb-10 lg:pt-10`)}>
            <p
              className={tw(
                `pt-10 lg:pt-8 pb-2 pl-6 text-lg font-semibold text-left text-gray-500 pt-2 lg:col-span-4 lg:text-3xl lg:mx-5 xl:mx-10 2xl:text-3xl ${
                  scrollY > 900 ? 'animate-fadeInRight' : 'invisible'
                }`,
              )}
            >
              Open source has operated similarly to DAOs for decades.
              <span
                className={tw(
                  `pt-2 pb-2 pl-2 font-semibold text-left text-gray-900 pt-2 text-lg lg:text-3xl 2xl:text-3xl`,
                )}
              >
                Pull requests are a tried and true mechanism{' '}
              </span>
              for proposing new code. Now you can leverage the same simple processes for bounties. Once a PR is closed,
              your contributor can immediately claim the bounty.
            </p>
            <div className={tw(`pt-6 pl-6 pb-10 lg:col-span-2 lg:-mt-10 lg:pt-20 xl:pt-10 2xl:pt-16`)}>
              <div
                className={tw(
                  `border border-gray-900 rounded-xl ${scrollY > 900 ? 'animate-fadeInLeft' : 'invisible'}`,
                )}
              >
                <div className={tw(``)}>
                  <h3 className={tw(`text-xl font-bold text-center text-gray-800 pt-5`)}>Mint Bounty</h3>
                  <p className={tw(`px-2 text-center text-base text-gray-600 pt-2`)}>
                    Create a Bounty to send funds to any GitHub Issue
                  </p>
                </div>
                <div className={tw(`px-3 pt-5`)}>
                  <div className={tw(`border border-gray-400 rounded-2xl px-4 py-2`)}>
                    <p className={tw(``)}>{scrollY < 1300 ? 'Issue URL' : 'https://github.com/OpenQDev/...'}</p>
                  </div>
                </div>
                {scrollY > 1320 ? (
                  <div className={tw(`px-3 pt-5`)}>
                    <div className={tw(`flex flex-row space-x-3 items-center`)}>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#15FB31"
                          viewBox="0 0 16 16"
                          width="17"
                          height="17"
                        >
                          <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          <path
                            fillRule="evenodd"
                            d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                          />
                        </svg>
                      </div>
                      <p className={tw(``)}>This is an example issue</p>
                    </div>
                  </div>
                ) : null}
                <div className={tw(`pt-5 pb-5 px-3`)}>
                  <div className={tw(``)}>
                    <div className={tw(`rounded-2xl`)}>
                      <button
                        className={tw(
                          `rounded-2xl w-full py-2 font-bold cursor-pointer text-white border border-pink-300 ${
                            scrollY > 1400 ? 'bg-pink-300' : 'bg-pink-700'
                          } hover:bg-pink-700 hover:bg-opacity-30 hover:text-white`,
                        )}
                      >
                        <div className={tw(`flex flex-row space-x-3 items-center justify-center`)}>
                          {scrollY > 1400 && scrollY < 1900 ? (
                            <div>
                              {color == 'white' ? (
                                <div>
                                  <svg
                                    className={tw(`h-5 w-5 mr-3 animate-spin
                                              rounded-full
                                              h-6
                                              w-6
                                              border-t-2 border-b-2 border-purple-500`)}
                                    viewBox="0 0 24 24"
                                  ></svg>
                                </div>
                              ) : (
                                <div>
                                  <svg
                                    className={tw(`h-5 w-5 mr-3 animate-spin
                                    rounded-full
                                    h-6
                                    w-6
                                    border-t-2 border-b-2 border-white`)}
                                    viewBox="0 0 24 24"
                                  ></svg>
                                </div>
                              )}
                            </div>
                          ) : null}
                          <p>{scrollY > 1900 ? 'Success' : 'Mint now'}</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <circle cx="14" cy="11" fill="white" r="5" stroke="#465061" strokeWidth="2" />
            </svg>
          </div>
          <p className={tw(`pl-2 text-md font-mono font-base text-left text-gray-500`)}>
            fund with any ERC-20 or MATIC
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
              <circle cx="14" cy="11" fill="white" r="5" stroke="#465061" strokeWidth="2" />
            </svg>
          </div>
          <p className={tw(`pl-2 text-md font-base font-mono text-left text-gray-500`)}>
            find devs with OpenQ talent pools
          </p>
        </div>
        <div className={tw(`border-l ml-1 border-gray-400 pb-9`)}>
          <div className={tw(`pt-8 lg:grid lg:grid-cols-6 lg:gap-4 px-3 lg:pb-10 lg:pt-10`)}>
            <p
              className={tw(
                `pt-5 pb-2 pl-6 text-lg font-semibold text-left text-gray-500 pt-2 lg:text-3xl lg:mx-10 lg:col-span-4 ${
                  scrollY > 1500 ? 'animate-fadeInRight' : 'invisible'
                }`,
              )}
            >
              Find
              <span className={tw(`pt-2 pb-2 pl-2 font-semibold text-left text-lg lg:text-3xl text-gray-900 pt-2`)}>
                bounties that match your skill set
              </span>
              {` `}
              and earn by getting your pull request merged.{' '}
              <p>Our permissionless bounty system integrates directly with GitHub.</p>
            </p>
            <div
              className={tw(`pl-8 pt-8 lg:-mt-10 lg:col-span-2 ${scrollY > 1500 ? 'animate-fadeInLeft' : 'invisible'}`)}
            >
              <div className={tw(`border border-gray-900 rounded-xl`)}>
                <div className={tw(`flex py-5 justify-center text-center items-center space-x-3`)}>
                  <div className={tw(``)}>
                    <Image src="/logo.png" alt="OpenQ Logo" width="60%" height="60%" />
                    <div className={tw(`font-bold text-2xl`)}>OpenQ</div>
                    <div className={tw(`pt-2 font-semibold text-gray-500`)}>5 open bounties</div>
                  </div>
                </div>
              </div>
              <div className={tw(`pt-5 lg:-mt-10 lg:ml-20 lg:bg-white`)}>
                <div className={tw(`border border-gray-900 rounded-xl `)}>
                  <div className={tw(`flex py-5 justify-center text-center items-center space-x-3`)}>
                    <div className={tw(``)}>
                      <Image src="/sushi.png" alt="OpenQ Logo" width="65%" height="65%" />
                      <div className={tw(`font-bold text-2xl`)}>Suhiswap</div>
                      <div className={tw(`pt-2 font-semibold text-gray-500`)}>4 open bounties</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={tw(`pt-5 lg:-mt-10 lg:ml-32 lg:bg-white`)}>
                <div className={tw(`border border-gray-900 rounded-xl`)}>
                  <div className={tw(`flex py-5 justify-center text-center items-center space-x-3`)}>
                    <div className={tw(``)}>
                      <Image src="/uniswap-2.png" alt="OpenQ Logo" width="75%" height="75%" />
                      <div className={tw(`font-bold text-2xl`)}>Uniswap</div>
                      <div className={tw(`pt-2 font-semibold text-gray-500`)}>2 open bounties</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <circle cx="14" cy="11" fill="white" r="5" stroke="#465061" strokeWidth="2" />
            </svg>
          </div>
          <p className={tw(`pl-2 text-md font-base font-mono text-left text-gray-500`)}>dev creates pull request</p>
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
              <circle cx="14" cy="11" fill="white" r="5" stroke="#465061" strokeWidth="2" />
            </svg>
          </div>
          <p className={tw(`pl-2 text-md font-base font-mono text-left text-gray-500`)}>
            mantainer merges pull request
          </p>
        </div>
        <div
          className={tw(`border-l ml-1 border-gray-400 pb-16 ${scrollY > 2115 ? 'animate-fadeInTop' : 'invisible'}`)}
        >
          <div className={tw(`pl-8 pt-8 hover:animate-wiggleY animate-wiggleYQuick`)}>
            <div className={tw(`border border-gray-900 rounded-xl`)}>
              <div className={tw(`px-5 text-center py-5`)}>
                <div className={tw(`flex flex-row justify-center items-center space-x-4`)}>
                  <div className={tw(`w-8`)}>
                    <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                      <g id="color">
                        <polygon
                          fill="#F1B31C"
                          stroke="none"
                          points="26.1808,20.1808 38.75,32.75 51.3192,45.3192 29.7894,54.2798 8.2597,63.2403 17.2202,41.7106"
                        />
                        <polygon
                          fill="#FCEA2B"
                          stroke="none"
                          points="40,35 25.6924,20.6692 16.3914,42.5394 7.0905,64.4095"
                        />
                        <polygon
                          fill="#EA5A47"
                          stroke="none"
                          points="15.2238,45.2849 26.2858,56.3469 20.7548,58.5984 12.9576,50.8012"
                        />
                        <polygon
                          fill="#D22F27"
                          stroke="none"
                          points="17.3429,55.2475 20.7548,58.5984 26.2858,56.3469 21.4849,51.546"
                        />
                        <polygon
                          fill="#EA5A47"
                          stroke="none"
                          points="20.8045,32.1625 27.5011,38.8591 39.2002,50.5583 32.9273,53.4217 24.7555,45.2498 18.1504,38.6447"
                        />
                        <polygon
                          fill="#D22F27"
                          stroke="none"
                          points="26.5369,47.0312 32.9273,53.4216 39.2003,50.5582 31.3616,42.7197"
                        />
                        <ellipse cx="30.2951" cy="14.4579" rx="2" ry="1.9708" fill="#8967aa" stroke="none" />
                        <path fill="#ea5a47" stroke="none" d="M23,37" />
                        <ellipse cx="60.2951" cy="18.4579" rx="2" ry="1.9708" fill="#f1b31c" stroke="none" />
                        <ellipse cx="57.2951" cy="39.4579" rx="2" ry="1.9708" fill="#d22f27" stroke="none" />
                      </g>
                      <g id="hair" />
                      <g id="skin" />
                      <g id="skin-shadow" />
                      <g id="line">
                        <polyline
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          points="50.6626,45.6395 50.8308,45.8076 28.9606,55.1086 7.0904,64.4096 16.3914,42.5394 25.6923,20.6692"
                        />
                        <polyline
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          points="25.801,20.7779 38.2616,33.2384 50.6626,45.6395"
                        />
                        <line
                          x1="25.6923"
                          x2="25.801"
                          y1="20.6692"
                          y2="20.7779"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        />
                        <path
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          d="M46.4905,7.3671c0.2347,0.4487,0.4027,0.943,0.4897,1.473c0.451,2.7473-1.447,5.4141-4.2392,5.9565"
                        />
                        <path
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          d="M42.9327,14.7763c-0.5049,0.0384-1.0133,0.1573-1.509,0.364c-2.5697,1.0713-3.828,4.093-2.8105,6.7492"
                        />
                        <path
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          d="M61.7928,26.7168c-0.0987,0.4967-0.2778,0.987-0.5425,1.4544c-1.372,2.4225-4.5229,3.309-7.0378,1.98"
                        />
                        <path
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          d="M54.3745,30.2558c-0.4173-0.2868-0.8878-0.513-1.4036-0.663c-2.6733-0.7775-5.5486,0.7867-6.4223,3.4936"
                        />
                      </g>
                    </svg>
                  </div>

                  <div className={tw(`font-bold text-xl`)}>Congratulations</div>
                </div>
                <div className={tw(`font-semibold pt-2 text-lg text-gray-500`)}>Your money is ready to withdraw.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BountySection;
