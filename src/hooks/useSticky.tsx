import { useState, useEffect, useMemo } from "react";

export const useSticky = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classNameString = useMemo(
    () =>
      `w-full z-10 bg-white transition-all duration-300 ${
        isSticky ? " sticky top-0 shadow-md" : ""
      }`,
    [isSticky]
  );

  return {
    isSticky,
    setIsSticky,
    classNameString,
  };
};
