// @ts-nocheck

import { tw } from 'twind';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/button';
import React from 'react';
import Link from 'next/link';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  /* {
    label: `Jobs`,
    href: `/`,
  }, */
  {
    label: `Contests`,
    href: `/contests`,
  },
  {
    label: `Community`,
    href: `https://discord.gg/5HFZj6pUhf`,
  },
  {
    label: `Blog`,
    href: `https://medium.com/openqdev`,
  },
];

const secondaryLinks = [
  {
    label: `Docs`,
    href: `https://docs.openq.dev/`,
  },
  {
    label: `Launch app`,
    href: `https://app.openq.dev/`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <div>
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
        width={24}
        height={24}
      >
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
        width={24}
        height={24}
      >
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
      </svg>
    )}
  </div>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={link.href}
          className={tw(`text-gray-200 block px-3 py-2 text-base font-medium`)}
          key={link.label}
        >
          {link.label}
        </a>
      ))}
    </div>
    <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: Link) => (
          <a
            target='_blank'
            rel='noopener noreferrer'
            key={`mobile-${link.label}`}
            href={link.href}
            className={tw(`block px-3 py-2 text-base font-medium text-gray-200`)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    console.log('toggled!');
    setShowMenu(!showMenu);
  };

  return (
    <nav className={tw(`bg-dark-mode`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <Link href='/'>
                <a>
                  <Image src='/logo.png' alt='OpenQ Logo' width='45%' height='45%' />
                </a>
              </Link>
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => (
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    key={link.label}
                    href={link.href}
                    className={tw(
                      `text-gray-200 hover:text-gray-100 border border-transparent hover:border-white hover:rounded-2xl px-3 py-2 rounded-md font-medium`
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              {/* <Button modifier="border-0 mr-2">Contact sales</Button> */}
              <Button modifier='border-0 hover:border-1 bg-gray-900 bg-opacity-10 hover:bg-dark-mode hover:rounded-2xl text-white mr-5'>
                <a target='_blank' rel='noopener noreferrer' href='https://docs.openq.dev/'>
                  Docs
                </a>
              </Button>
              <Button modifier='no-click font-montserrat border rounded-lg px-8 border-purple-500 bg-purple-800 text-purple-100 font-bold hover:bg-purple-600'>
                <a href='https://app.openq.dev/'>Launch App</a>
              </Button>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <button
              type='button'
              aria-controls='mobile-menu'
              aria-expanded={showMenu}
              onClick={toggleMenu}
              className={tw(`p-2 text-gray-400`)}
            >
              <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
            </button>
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
