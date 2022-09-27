import '@/styles/global.css';
import '@fontsource/inter';
import Script from 'next/script';
import Head from 'next/head';

import { setup } from 'twind';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import twindConfig from '../twind.config';
import * as ga from '../lib/analytics';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics-script' strategy='afterInteractive'>
        {`
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>

      <Head>
      
<script>function hotjar(){
(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3177116,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')


}
    hotjar();
</script></Head>
      
      <Component {...pageProps} />
    </>
  );
}
