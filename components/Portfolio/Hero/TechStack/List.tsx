import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import TechStackData from "data/About/TechStackData";
import { palette } from "styles/palette";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type TeckStackListProps = {
  setTechSlideIndex: (slideIndex: any) => void;
};

const TeckStackList = ({ setTechSlideIndex }: TeckStackListProps) => {
  const { frontEnd, backEnd, mobile, cloud, devOps } = TechStackData;

  return (
    <Container>
      <Slider
        afterChange={(index) => {
          console.log(index);
          setTechSlideIndex(index);
        }}
      >
        <Slide name="프론트엔드" itemList={frontEnd} />
        <Slide name="백엔드" itemList={backEnd} />
        <Slide name="클라우드" itemList={cloud} />
        <Slide name="데브옵스" itemList={devOps} />
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  border: 3px solid ${palette.grey[50]};
  max-width: 600px;
  height: 100%;
  border-radius: 8px;
`;

export default TeckStackList;
