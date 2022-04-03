import { logEvent, Analytics, isSupported, getAnalytics, initializeAnalytics } from 'firebase/analytics';
import { useEffect } from 'react';
import { firebaseApp } from '..';

let analytics: Analytics;

(async () => {
  analytics = (await isSupported()) && getAnalytics(firebaseApp);
})();

export const useAnalytics = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') return;
    initializeAnalytics(firebaseApp);
  }, []);
};

export const usePageView = (location: string, path: string) => {
  useEffect(() => {
    if (!analytics || typeof document === 'undefined') return;
    logEvent(analytics, 'page_view', { page_location: location, page_path: path, page_title: document.title });
  }, [location, path]);
};
