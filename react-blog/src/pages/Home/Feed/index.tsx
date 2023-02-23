import { memo, useCallback, useEffect, useRef, useState } from "react";
import { defaultPosts } from "./posts";
import { StyledContainer, StyledPost } from "./styles";

const postsPerPage = 5;

export const Feed = memo(() => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(defaultPosts.slice(0, postsPerPage));
  const [, setHotUpdate] = useState({});

  const containerRef = useRef<HTMLDivElement | null>(null);

  const onScroll = useCallback(
    (e) => {
      if (
        document.documentElement.scrollHeight -
          (document.documentElement.scrollTop + window.innerHeight) <=
        250
      ) {
        setPosts((prev) => [...prev, ...defaultPosts.slice(0, 5)]);
      }
    },
    [containerRef]
  );

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => {
      document?.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setHotUpdate({});
    }, 100);
  }, []);

  return (
    <StyledContainer ref={containerRef}>
      {posts.map((post) => (
        <StyledPost />
      ))}
    </StyledContainer>
  );
});
