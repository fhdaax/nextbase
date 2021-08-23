import { ToastProvider } from 'react-toast-notifications';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import 'nprogress/nprogress.css';
import firebase from 'cloud';
import 'styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  const { events } = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      firebase.analytics();
      firebase.performance();
    }
  }, []);
  useEffect(() => {
    const startProgress = () => {
      nProgress.start();
    };
    const stopProgress = () => {
      nProgress.done();
    };
    events.on('routeChangeStart', startProgress);
    events.on('routeChangeError', stopProgress);
    events.on('routeChangeComplete', stopProgress);
  }, []);
  return (
    <ToastProvider placement='bottom-center' autoDismiss>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default App;
