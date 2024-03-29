// @ts-nocheck

import { tw } from 'twind';

import Footer from '@/components/footer';

import Navigation from '@/components/navigation';

export default function Terms() {
  return (
    <div className={tw(`bg-dark-mode h-fit`)}>
      <Navigation />
      <div className={tw(`font-montserrat text-white px-64 pb-20`)}>
        <h1 className={tw(`font-bold text-3xl text-center p-20`)}>Privacy Policy for OpenQ</h1>

        <p className={tw(`text-lg pb-5`)}>
          At OpenQ , accessible from www.openq.dev, one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is collected and recorded by OpenQ and how we use
          it.
        </p>

        <p className={tw(`text-lg pb-5`)}>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to
          contact us. Our Privacy Policy was generated with the help of{' '}
          <a href='https://www.gdprprivacypolicy.net/'>GDPR Privacy Policy Generator from GDPRPrivacyPolicy.net</a>
        </p>

        <h2 className={tw(`font-bold text-xl`)}>General Data Protection Regulation (GDPR)</h2>
        <p className={tw(`text-lg pb-5`)}>We are a Data Controller of your information.</p>

        <p className={tw(`text-lg pb-5`)}>
          OpenQ legal basis for collecting and using the personal information described in this Privacy Policy depends
          on the Personal Information we collect and the specific context in which we collect the information:
        </p>
        <ul className={tw(`list-disc pl-5 pb-5`)}>
          <li>OpenQ needs to perform a contract with you</li>
          <li>You have given OpenQ permission to do so</li>
          <li>Processing your personal information is in OpenQ legitimate interests</li>
          <li>OpenQ needs to comply with the law</li>
        </ul>

        <p className={tw(`text-lg pb-5`)}>
          OpenQ will retain your personal information only for as long as is necessary for the purposes set out in this
          Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal
          obligations, resolve disputes, and enforce our policies.
        </p>

        <p className={tw(`text-lg pb-5`)}>
          If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you
          wish to be informed what Personal Information we hold about you and if you want it to be removed from our
          systems, please contact us.
        </p>

        <p className={tw(`text-lg pb-5`)}>In certain circumstances, you have the following data protection rights:</p>
        <ul className={tw(`list-disc pl-5 pb-5`)}>
          <li>The right to access, update or to delete the information we have on you.</li>
          <li>The right of rectification.</li>
          <li>The right to object.</li>
          <li>The right of restriction.</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>

        <h2 className={tw(`font-bold text-xl`)}>Log Files</h2>

        <p className={tw(`text-lg pb-5`)}>
          OpenQ follows a standard procedure of using log files. These files log visitors when they visit websites. All
          hosting companies do this and a part of hosting services analytics. The information collected by log files
          include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not linked to any information that is
          personally identifiable. The purpose of the information is for analyzing trends, administering the site,
          tracking users movement on the website, and gathering demographic information.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>Cookies and Web Beacons</h2>

        <p className={tw(`text-lg pb-5`)}>
          Like any other website, OpenQ uses cookies. These cookies are used to store information including visitors
          preferences, and the pages on the website that the visitor accessed or visited. The information is used to
          optimize the users experience by customizing our web page content based on visitors browser type and/or other
          information.
        </p>

        <p className={tw(`text-lg pb-5`)}>
          For more general information on cookies, please read the{' '}
          <a href='https://www.generateprivacypolicy.com/#cookies'>Cookies article here.</a>.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>Privacy Policies</h2>

        <p className={tw(`text-lg pb-5`)}>
          You may consult this list to find the Privacy Policy for each of the advertising partners of OpenQ .
        </p>

        <p className={tw(`text-lg pb-5`)}>
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used
          in their respective advertisements and links that appear on OpenQ , which are sent directly to users browser.
          They automatically receive your IP address when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on
          websites that you visit.
        </p>

        <p className={tw(`text-lg pb-5`)}>
          Note that OpenQ has no access to or control over these cookies that are used by third-party advertisers.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>Third Party Privacy Policies</h2>

        <p className={tw(`text-lg pb-5`)}>
          OpenQs Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult
          the respective Privacy Policies of these third-party ad servers for more detailed information. It may include
          their practices and instructions about how to opt-out of certain options.{' '}
        </p>

        <p className={tw(`text-lg pb-5`)}>
          You can choose to disable cookies through your individual browser options. To know more detailed information
          about cookie management with specific web browsers, it can be found at the browsers respective websites.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>Childrens Information</h2>

        <p className={tw(`text-lg pb-5`)}>
          Another part of our priority is adding protection for children while using the internet. We encourage parents
          and guardians to observe, participate in, and/or monitor and guide their online activity.
        </p>

        <p className={tw(`text-lg pb-5`)}>
          OpenQ does not knowingly collect any Personal Identifiable Information from children under the age of 13. If
          you think that your child provided this kind of information on our website, we strongly encourage you to
          contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>Online Privacy Policy Only</h2>

        <p className={tw(`text-lg pb-5`)}>
          Our Privacy Policy created at GDPRPrivacyPolicy.net) applies only to our online activities and is valid for
          visitors to our website with regards to the information that they shared and/or collect in OpenQ . This policy
          is not applicable to any information collected offline or via channels other than this website.
        </p>

        <h2 className={tw(`font-bold text-xl`)}>Consent</h2>

        <p className={tw(`text-lg pb-5`)}>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
      </div>
      <Footer />
    </div>
  );
}
