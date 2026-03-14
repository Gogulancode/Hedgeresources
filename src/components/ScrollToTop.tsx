import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Send page view to Google Analytics on route change
    if (window.gtag) {
      window.gtag("config", "G-CX8DVK040P", { page_path: pathname });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
