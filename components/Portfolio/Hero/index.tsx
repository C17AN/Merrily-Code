import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import Divider from "components/Portfolio/common/Divider";
import TechStack from "./TechStack";
import ProfileImage from "public/images/profile.png";
import GreetingImage from "public/images/greeting-image.jpg";
import HighlightedText from "../common/HighlightedText";
import { palette } from "styles/palette";

interface Props {}

const Hero = (props: Props) => {
  return (
    <Container>
      <Title>
        <span className="greeting-hand">👋🏻</span> 안녕하세요, 찬민입니다!
      </Title>
      <Content>
        <Profile>
          <Image src={GreetingImage} alt="프로필 이미지" />
          <p className="profile-description">🍵 민트초코단의 간부이기도 하죠! 😎</p>
        </Profile>
        <div>
          <HighlightedText
            color={palette.skyBlue.primary}
          >{`data: {name: "찬민", message: "Hello, World!"}`}</HighlightedText>
          <Description>
            성장과 공유를 기쁨으로 생각하며, 새로운 기술을 향한 도전을 주저하지 않습니다.
            <p className="newline" />
            현재는 주로 웹 프론트엔드 개발을 하고 있지만, 모바일과 데브옵스까지 정복하는 것이
            목표입니다!
          </Description>
          <Divider />
          <TechStack />
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    & {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const Profile = styled.div`
  width: 280px;

  .profile-description {
    font-size: 0.875rem;
    text-align: center;
    line-height: 1.5;
    margin: 0.5rem 0;
    color: ${palette.grey[500]};
  }

  @media (max-width: 768px) {
    & {
      width: 90%;
      max-width: 400px;
      margin: 0 auto;
    }

    > .profile-description {
      font-size: 0.875rem;
      text-align: center;
    }
  }
`;

const Content = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

const Description = styled.div`
  padding-top: 0.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  font-size: 14px;
  @media (max-width: 768px) {
    & {
      font-size: 13px;
      .newline {
        margin: 0.25rem;
      }
    }
  }
`;

export default Hero;
