import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import useCategoryHeader from "hooks/useCategoryHeader";
import Divider from "components/common/Divider";
import { palette } from "styles/palette";

const PostEmpty = () => {
  const { icon, displayName } = useCategoryHeader();

  return (
    <Container>
      <PostListHeader>
        <>{icon}</>
        <h2>{displayName}</h2>
      </PostListHeader>
      <Divider />
      <Content>
        <Image src={"/images/404.svg"} width={400} height={400} alt="404" />
        <p className="not-found-description">
          이런, 아직은 등록된 글이 없는 것 같네요!
          <br />
          기다려주시면 금방 새로운 글로 찾아올게요!
        </p>
      </Content>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostListHeader = styled.header`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;

  & > svg {
    margin-right: 0.75rem;
    fill: ${palette.grey[500]};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .not-found-description {
    line-height: 1.5;
    text-align: center;
    font-size: 0.875rem;
  }
`;

export default PostEmpty;
