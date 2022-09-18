const Bounties = () => {
  return (
    <div className='flex flex-row flex-wrap sm:flex-nowrap justify-between sm:pt-0 text-primary animate-fadeIn'>
      <div className='w-3/4'>
        <div className='flex flex-grow flex-row items-center md:space-x-2 sm:pb-0 w-full'>
          <div className='hidden md:block'>
            <svg xmlns='http://www.w3.org/2000/svg' className='fill-green' viewBox='0 0 16 16' width='19' height='19'>
              <path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
              <path
                fillRule='evenodd'
                d='M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
              ></path>
            </svg>
          </div>
          <div className='break-word text-xl text-link-colour inline gap-1 pb-1'>
            <span data-testid='repo'>snapshot-labs/snapshot</span>
            <span></span>
          </div>
        </div>
        <div className='font-bold text-lg'>[bug] - playground page doesn't scroll when we vis...</div>
        <div className='flex flex-row items-center space-x-4 w-full'>
          <div className='font-light text-sm w-full'>Deployed 10 days ago</div>
        </div>
        <div className='pt-1'>
          <ul className='flex flex-wrap w-full flex-row gap-1 py-px'>
            <li
              className='rounded-lg text-xs mr-2 mb-px py-px px-2 font-bold border border-purple-500  truncate inline list-style-none'
              style='background-color: rgba(215, 58, 74, 0.133); border-color: rgb(215, 58, 74); opacity: 0.9; color: rgb(235, 156, 164);'
            >
              bug-report
            </li>
          </ul>
        </div>
        <div className='flex flex-row items-center gap-4 text-muted font-semibold'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-muted inline-block mr-1 -mt-1 fill-muted'
              viewBox='0 0 16 16'
              width='16'
              height='16'
            >
              <path d='M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z'></path>
            </svg>
            <span>0</span>
          </span>
          <span>Assigned to no one.</span>
        </div>
      </div>
      <div className='flex flex-col justify-between items-end leading-tight '>
        <div className='sm:block hidden'>
          {' '}
          <span style='box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; opacity: 1; border: 0px none; margin: 0px; padding: 0px; position: relative; max-width: 100%;'>
            <span style='box-sizing: border-box; display: block; width: initial; height: initial; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; opacity: 1; border: 0px none; margin: 0px; padding: 0px; max-width: 100%;'>
              <img
                style='display: block; max-width: 100%; width: initial; height: initial; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; opacity: 1; border: 0px none; margin: 0px; padding: 0px;'
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2751%27%20height=%2751%27/%3e'
              />
            </span>
            <img
              alt='avatarUrl'
              src='/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F72904068%3Fv%3D4&amp;w=128&amp;q=75'
              decoding='async'
              data-nimg='intrinsic'
              className='rounded-full '
              style='position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: medium none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;'
              srcSet='/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F72904068%3Fv%3D4&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F72904068%3Fv%3D4&amp;w=128&amp;q=75 2x'
            />
          </span>
        </div>
        <div className='flex gap-4 content-center items-center justify-between sm:w-60'>
          <span className='font-semibold flex flex-end items-center content-center gap-1 w-max'>
            <svg
              aria-hidden='true'
              role='img'
              className='octicon octicon-person'
              viewBox='0 0 16 16'
              width='16'
              height='16'
              fill='currentColor'
              style='display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;'
            >
              <path
                fillRule='evenodd'
                d='M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z'
              ></path>
            </svg>
            <div className='whitespace-nowrap'>Fixed Price</div>
          </span>
          <div className='flex flex-row space-x-1 items-center'>
            <div className='pr-2 pt-1'>
              <span style='box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; opacity: 1; border: 0px none; margin: 0px; padding: 0px; position: relative; max-width: 100%;'>
                <span style='box-sizing: border-box; display: block; width: initial; height: initial; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; opacity: 1; border: 0px none; margin: 0px; padding: 0px; max-width: 100%;'>
                  <img
                    style='display: block; max-width: 100%; width: initial; height: initial; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; opacity: 1; border: 0px none; margin: 0px; padding: 0px;'
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2712%27%20height=%2720%27/%3e'
                  />
                </span>
                <img
                  alt='avatarUrl'
                  srcSet='/crypto-logos/ETH.svg 1x, /crypto-logos/ETH.svg 2x'
                  src='/crypto-logos/ETH.svg'
                  decoding='async'
                  data-nimg='intrinsic'
                  style='position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: medium none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;'
                />
              </span>
            </div>
            <div className='font-semibold '>Budget</div>
            <div className=''>$166.48</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bounties;
