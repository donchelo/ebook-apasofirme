/**
 * Meta Pixel Tracking Utility
 */

declare global {
  interface Window {
    fbq: any;
  }
}

export const trackPixelEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  } else {
    console.log(`[Pixel Event - ${eventName}]`, params);
  }
};

export const trackCustomPixelEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
  } else {
    console.log(`[Pixel Custom Event - ${eventName}]`, params);
  }
};
