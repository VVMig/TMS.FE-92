import { useCallback, useEffect, useState } from "react";

export const useScroll = (ref: HTMLDivElement | null) => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((e) => {
    setScrollY(e.target.scrollTop);
  }, []);

  const scrollToTop = () => {
    ref?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (ref) {
      ref.addEventListener("scroll", onScroll);
    }

    return () => {
      ref?.removeEventListener("scroll", onScroll);
    };
  }, [ref]);

  return {
    scrollY,
    scrollToTop,
  };
};
