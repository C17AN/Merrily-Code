import styled from "@emotion/styled";
import Intro from "components/Home/Intro";
import Portfolio from "components/Home/Portfolio";
import React, { useState } from "react";

type Props = {};

const Home = (props: Props) => {
  const [isIntroPage, setIsIntroPage] = useState(true);

  const toggleMainpageComponent = () => {
    setIsIntroPage((isIntroPage) => !isIntroPage);
  };

  return (
    <Container>
      <button onClick={toggleMainpageComponent}>뷰 전환</button>
      {isIntroPage ? <Intro /> : <Portfolio />}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;

export default Home;
