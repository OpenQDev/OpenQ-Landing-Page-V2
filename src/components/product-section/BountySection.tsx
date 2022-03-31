import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import Image from 'next/image';

const listItems = [
  {
    title: `Permissionless Bounties`,
    description: `Pull requests are a much better mental model for decentralized communities. Our permissionless bounty system integrates directly with GitHub. Once a PR is closed, the developer automatically is eligable to withdraw the escrow.`,
  },
];

const BountySection = () => (
  <div>
    <div className={tw(`mb-8 mx-10 lg:mx-64 mx-auto lg:mb-16`)}>
      <p
        className={tw(
          `text-4xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-500`,
        )}
      >
        The Future of Work Stack.
      </p>
      <p className={tw(`text-4xl lg:text-7xl font-extrabold tracking-tight text-black`)}>
        Grow your community with atomic contracts and permissionless bounties.
      </p>
    </div>
    <section className={tw(`font-montserrat mx-10 lg:mx-64 mx-auto`)}>
      <div className={tw(`flex flex-row space-x-3 items-center pb-3`)}>
        <div className={tw(`border border-2 -ml-2 rounded-lg py-1 px-2 text-sm border-gray-500 text-gray-500`)}>$_</div>
        <h2 className={tw(`text-md pl-2 text-gray-500`)}>Fund issue</h2>
      </div>
      <div className={tw(`flex flex-row space-x-3 items-center`)}>
        <div className={tw(`w-3 h-3 border rounded-full border-gray-400`)} />
        <div className={tw(`pl-5`)}>
          <div className={tw(`flex flex-row items-center border rounded-2xl border-gray-500 py-2 px-4 space-x-1`)}>
            <Image src="/eth-colour.png" alt="OpenQ Logo" width="15%" height="25%" />
            <p className={tw(`pl-2 text-md font-base text-left text-gray-500`)}>deposit erc-20</p>
          </div>
        </div>
      </div>
      <div className={tw(`pl-1 `)}>
        <div className={tw(`border-l border-gray-400 lg:grid lg:grid-cols-6 lg:gap-4 px-3 lg:pb-10 lg:pt-10`)}>
          <p
            className={tw(
              `pt-5 pb-2 pl-6 text-lg font-semibold text-left text-gray-500 pt-2 lg:text-3xl lg:mx-10 lg:col-span-4`,
            )}
          >
            Open source has operated similarly to DAOs for decades.
            <span className={tw(`pt-2 pb-2 pl-2 font-semibold text-left text-lg lg:text-3xl text-gray-900 pt-2`)}>
              Pull requests are a tried and true mechanism{' '}
            </span>
            for proposing new code. Now you can leverage the same simple processes for bounties.
          </p>
          <div className={tw(`pt-3 pl-6 pb-10 lg:col-span-2`)}>
            <div className={tw(`border border-gray-900 rounded-xl`)}>
              <div className={tw(``)}>
                <h3 className={tw(`text-xl font-bold text-center text-gray-800 pt-5`)}>Mint Bounty</h3>
                <p className={tw(`px-2 text-center text-base text-gray-600 pt-2`)}>
                  Create a Bounty to send funds to any GitHub Issue
                </p>
              </div>
              <div className={tw(`px-3 pt-5`)}>
                <div className={tw(`border border-gray-400 rounded-xl px-4`)}>
                  <p className={tw(``)}>Issue URL</p>
                </div>
              </div>
              <div className={tw(`px-3 pt-5`)}>
                <div className={tw(`flex flex-row space-x-3 items-center`)}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#15FB31" viewBox="0 0 16 16" width="17" height="17">
                      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      <path
                        fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                      />
                    </svg>
                  </div>
                  <p className={tw(``)}>Issue Name </p>
                </div>
              </div>
              <div className={tw(`pt-5 pb-5 px-3`)}>
                <div className={tw(``)}>
                  <div className={tw(`rounded-2xl`)}>
                    <button
                      className={tw(
                        `rounded-2xl w-full py-2 font-bold cursor-pointer text-white border border-pink-300 bg-pink-700 bg-opacity-20 hover:bg-pink-700 hover:bg-opacity-30 hover:text-white`,
                      )}
                    >
                      Mint Bounty
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
        <p className={tw(`pl-2 text-md font-base text-left text-gray-500`)}>Fund with any ERC-20</p>
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
        <p className={tw(`pl-2 text-md font-base text-left text-gray-500`)}>Find devs with OpenQ talent pools</p>
      </div>
      <div className={tw(`border-l ml-1 border-gray-400 pb-9`)}>
        <div className={tw(`pt-8 lg:grid lg:grid-cols-6 lg:gap-4 px-3 lg:pb-10 lg:pt-10`)}>
          <p
            className={tw(
              `pt-5 pb-2 pl-6 text-lg font-semibold text-left text-gray-500 pt-2 lg:text-3xl lg:mx-10 lg:col-span-4`,
            )}
          >
            Find
            <span className={tw(`pt-2 pb-2 pl-2 font-semibold text-left text-lg lg:text-3xl text-gray-900 pt-2`)}>
              bounties that match your skill set
            </span>
            {` `}
            and earn by getting your pull request merged.{' '}
            <p>
              Our permissionless bounty system integrates directly with GitHub. Once a PR is closed, your contributor
              can immediately claim the bounty.
            </p>
          </p>
          <div className={tw(`pl-8 pt-8 lg:col-span-2`)}>
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
        <p className={tw(`pl-2 text-md font-base text-left text-gray-500`)}>Dev creates pull request</p>
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
        <p className={tw(`pl-2 text-md font-base text-left text-gray-500`)}>Mantainer merges pull request</p>
      </div>
      <div className={tw(`border-l ml-1 border-gray-400 pb-16`)}>
        <div className={tw(`pl-8 pt-8`)}>
          <div className={tw(`border border-gray-900 rounded-xl`)}>
            <div className={tw(`px-5 text-center py-5`)}>
              <div className={tw(`font-bold text-xl`)}>Congratulations</div>
              <div className={tw(`font-semibold pt-2 text-lg text-gray-500`)}>Your money is ready to withdraw.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default BountySection;
