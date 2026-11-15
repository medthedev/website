import { useCallback, useSyncExternalStore } from "react";

const mediaQueries = new Map<string, MediaQueryList>();

function getMediaQuery(query: string): MediaQueryList {
  let mediaQuery = mediaQueries.get(query);

  if (!mediaQuery) {
    mediaQuery = window.matchMedia(query);
    mediaQueries.set(query, mediaQuery);
  }

  return mediaQuery;
}

/** Subscribes to a CSS media query and returns whether it currently matches. */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mediaQuery = getMediaQuery(query);
      mediaQuery.addEventListener("change", onStoreChange);
      return () => mediaQuery.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => getMediaQuery(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
