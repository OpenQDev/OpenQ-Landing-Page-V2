import { tw } from 'twind';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import OnScroll from '../utils/OnScroll';

const Organizations = () => {
  return (
    <div className={tw(`pl-8 pt-8 lg:-mt-10 lg:col-span-2`)}>
      <div className={tw(`border border-gray-900 rounded-xl`)}>
        <div className={tw(`flex py-5 justify-center text-center items-center space-x-3`)}>
          <div className={tw(``)}>
            <Image src='/logo.png' alt='OpenQ Logo' width='60%' height='60%' />
            <div className={tw(`font-bold text-2xl`)}>OpenQ</div>
            <div className={tw(`pt-2 font-semibold text-gray-500`)}>5 open bounties</div>
          </div>
        </div>
      </div>
      <div className={tw(`pt-5 lg:-mt-10 lg:ml-20 lg:bg-white`)}>
        <div className={tw(`border border-gray-900 rounded-xl `)}>
          <div className={tw(`flex py-5 justify-center text-center items-center space-x-3`)}>
            <div className={tw(``)}>
              <Image src='/sushi.png' alt='OpenQ Logo' width='65%' height='65%' />
              <div className={tw(`font-bold text-2xl`)}>Sushiswap</div>
              <div className={tw(`pt-2 font-semibold text-gray-500`)}>4 open bounties</div>
            </div>
          </div>
        </div>
      </div>
      <div className={tw(`pt-5 lg:-mt-10 lg:ml-32 lg:bg-white`)}>
        <div className={tw(`border border-gray-900 rounded-xl`)}>
          <div className={tw(`flex py-5 justify-center text-center items-center space-x-3`)}>
            <div className={tw(``)}>
              <Image src='/uniswap-2.png' alt='OpenQ Logo' width='75%' height='75%' />
              <div className={tw(`font-bold text-2xl`)}>Uniswap</div>
              <div className={tw(`pt-2 font-semibold text-gray-500`)}>2 open bounties</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
