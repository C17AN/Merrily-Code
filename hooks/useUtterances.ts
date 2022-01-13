import { useEffect, useRef, useState } from "react";

const useUtterances = (parentNodeSelector: string) => {
  const utteranceRef = useRef<HTMLScriptElement>();
  const [isUtterancesActive, setIsUtterancesActive] = useState(false);

  useEffect(() => {
    setIsUtterancesActive(false);
    let { current: utterance = null } = utteranceRef;
    const container = document.querySelector(parentNodeSelector);
    utterance = document.createElement("script");
    utterance.src = "https://utteranc.es/client.js";
    utterance.setAttribute("repo", "C17AN/Merrily-Code");
    utterance.setAttribute("issue-term", "pathname");
    utterance.setAttribute("label", "comment");
    utterance.setAttribute("theme", "github-light");
    utterance.setAttribute("crossorigin", "anonymous");
    utterance.setAttribute("async", "");
    container?.appendChild(utterance);
    setIsUtterancesActive(true);

    // return () => {
    //   if (utterance && container) {
    //     console.log(utterance, container);
    //     container.removeChild(utterance);
    //   }
    // };
  }, [parentNodeSelector]);

  return isUtterancesActive;
};

export default useUtterances;
