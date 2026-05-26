import { useEffect, useState } from "react";

export function useBackButtonVisibility() {
  const [isBackHidden, setIsBackHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const showBackButton = () => setIsBackHidden(false);
    const hideBackButton = () => setIsBackHidden(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
        showBackButton();
      } else if (currentScrollY > lastScrollY) {
        hideBackButton();
      }

      lastScrollY = currentScrollY;
    };

    const handleWheel = (event) => {
      if (event.deltaY < 0) showBackButton();
      if (event.deltaY > 0) hideBackButton();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true, capture: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel, { capture: true });
    };
  }, []);

  return isBackHidden;
}
