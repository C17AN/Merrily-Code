import styled from "@emotion/styled";
import React from "react";
import Hero from "./Hero";
import BannerButton from "./BannerButton";
import { palette } from "styles/palette";

type Props = {};

const Intro = (props: Props) => {
  return (
    <Container>
      <Hero />
      <Banner>
        <BannerButton>블로그 방명록 남기기</BannerButton>
        <BannerButton>포트폴리오 구경하기</BannerButton>
      </Banner>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 1rem;
  height: 100%;
  padding: 5rem;
`;

const Banner = styled.section`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export default Intro;
