import '@/styles/global.css';
import '@fontsource/inter';
import Script from 'next/script';

import { setup } from 'twind';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import twindConfig from '../twind.config';
import * as ga from '../lib/analytics';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
useEffect(()=>{

const hjid = "3177116"
const hjsv = "6"
hotjar.initialize(hjid, hjsv);

// Identify the user
hotjar.identify('USER_ID', { userProperty: 'value' });

// Add an event
hotjar.event('button-click');

// Update SPA state
hotjar.stateChange('/my/page');

// Check if Hotjar has been initialized before calling its methods
if (hotjar.initialized()) {
  hotjar.identify('USER_ID', { userProperty: 'value' });
}

},[])

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
    <Head>
      <script type='text/javascript'>
          {`window['__ls_namespace'] = 'LiveSession';
    window['__ls_script_url'] = 'https://cdn.livesession.io/track.js';
    !function(w, d, t, u, n) {
          if (n in w) {if(w.console && w.console.log) { w.console.log('LiveSession namespace conflict. Please set window["__ls_namespace"].');} return;}
          if (w[n]) return; var f = w[n] = function() { f.push ? f.push.apply(f, arguments) : f.store.push(arguments)};
          if (!w[n]) w[n] = f; f.store = []; f.v = "1.1";
  
          var ls = d.createElement(t); ls.async = true; ls.src = u;
          var s = d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(ls, s);
      }(window, document, 'script', window['__ls_script_url'], window['__ls_namespace']);
  
      LiveSession("init", "e91cab7c.902b992f", { keystrokes: false, rootHostname : '.openq.dev' });
      LiveSession("newPageView");
      LiveSession("getSessionURL", function(url, isNewSession){
        if(isNewSession){
            ga('send', {
                hitType: 'event',
                eventCategory: 'LiveSession recording',
                eventAction: url,
                nonInteraction: 1
            })
        }
    });`}
        </script>
    </Head>
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

      <Script
        onLoad={()=>{
           (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3177116,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
