import { useEffect, useState } from "react";

const useIsBrowser = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  return isBrowser;
};

export default useIsBrowser;
