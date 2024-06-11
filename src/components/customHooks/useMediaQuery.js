import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    // returns object to see if matches
    const mediaQueryList = window.matchMedia(query);
    // function to capture the matches. mQL.matches gets the matches
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // fires the function documentChangeHandler when there's a change to the object looking for matches
    mediaQueryList.addEventListener('change', documentChangeHandler);

    // removes listener to avoid memory leaks
    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
    // listens for a change in query
  }, [query]);

  return matches;
};

export default useMediaQuery;