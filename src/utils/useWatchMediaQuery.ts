import { useEffect, useState } from 'react';

// https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes
const useWatchMediaQuery = (query: string): boolean => {
  const [isMatches, setIsMatches] = useState(
    matchMedia(query).matches,
  );

  useEffect(() => {
    const media = matchMedia(query);

    const onChange = () => {
      setIsMatches(media.matches);
    };

    media.addEventListener('change', onChange);

    return () => {
      media.removeEventListener('change', onChange);
    };
  }, [isMatches]);

  return isMatches;
};

export { useWatchMediaQuery };
