import Intro from "components/Intro";
import Portfolio from "components/Portfolio";
import React, { useState } from "react";

type Props = {};

const Home = (props: Props) => {
  const [isIntroPage, setIsIntroPage] = useState(true);

  const toggleMainpageComponent = () => {
    setIsIntroPage((isIntroPage) => !isIntroPage);
  };

  return (
    <>
      <button onClick={toggleMainpageComponent}>뷰 전환</button>
      {isIntroPage ? <Intro /> : <Portfolio />}
    </>
  );
};

export default Home;
