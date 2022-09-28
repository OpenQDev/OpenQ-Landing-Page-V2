import Image from 'next/image';
import { tw } from 'twind';
import styles from './CreatePrMock.module.css';
import { useState, useEffect, useRef } from 'react';


const CreatePrMock = () => {
  return (
    <div className={tw(`w-full pt-4 flex justify-between relative lg:w-80 xl:w-96 w-full `)}>
      <div className='w-9 h-9 top-0 right-0 flex-none'>
        <Image className='rounded-full' height={36} width={36} src={'/githubAvatar.jpg'} />
      </div>

      <div
        className={
          styles.productSectionGithubMessage +
          ' ' +
          tw(` text-primary bg-dark-mode rounded-lg  ml-4 border-gray-500 flex-1 border relative border`)
        }
      >
        <div className={tw(` p-2`)}>
          <div className={tw(`border border-muted w-full p-2 rounded-md font-semibold bg-black`)}>
            Fixed integration issues on new-design - 2
          </div>
        </div>
        <div className={tw(` border-muted border-t pt-2 bg-githubMessageColor rounded-b-lg`)}>
          <div className={tw(`flex px-4 text-sm`)}>
            <div className={tw(`px-4 py-2`)}>Write</div>
            <div className={tw(`px-4 py-2 border-x border-t rounded-t border-muted`)}>Preview</div>
          </div>
          <div className={tw(`border-muted p-3 border-t text-sm `)}>
            <p>
              {' '}
              Closes <span className={tw(`text-link-colour pb-1`)}>#554</span> uses ens when on the timeline where
              possible. Please check this as I was only able to test it by messing with props. I still haven't gotten an
              ens name.
            </p>
            <p>
              Closes #551 made mint bounty modal and view stream say Created on{' '}
              {'{{ month }}, {{ date }} at {{ time }}'}.
            </p>
            <p>
              {' '}
              Closes <span className={tw(`text-link-colour pb-1`)}>550</span> fixed issues that occur when user is
              pushed to the issue directly after the graph indexes the bounty, including the bounty status. I wasn't
              noticing this on local because the local graph almost instantly indexes the new bounty.
            </p>
            <p className={tw(`border-b-2 pb-1 border-muted pb-1`)}>
              Closes <span className={tw(`text-link-colour`)}>#549</span> dispatched the CONNECT_WALLET action instead
              of attempting star when user is disconnected.
            </p>
            <div className={tw(`bg-github-primary text-white p-1 w-40 text-center rounded-md float-right my-2`)}>
              {' '}
              Create Pull Request
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePrMock;
