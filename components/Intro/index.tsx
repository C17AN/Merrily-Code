import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

type Props = {};

const Intro = (props: Props) => {
  return (
    <Container>
      <div className="hero">즐겁게, 코드</div>
      <div className="recent">최근 업로드된 글</div>
      <div className="bio">바이오그래피</div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 1rem;
  width: 100%;
  padding: 1rem;
  grid-gap: 1rem;

  .hero {
    font-size: 2.5rem;
    font-weight: bolder;
    text-align: center;
    grid-column: 1 / 3;
  }

  .recent {
    border: 1px solid ${palette.grey[100]};
    padding: 1rem;
    grid-row: 2;
    text-align: center;
    border-radius: 0.75rem;
  }

  .bio {
    border: 1px solid ${palette.grey[100]};
    padding: 1rem;
    grid-row: 2;
    text-align: center;
    border-radius: 0.75rem;
  }
`;

export default Intro;
