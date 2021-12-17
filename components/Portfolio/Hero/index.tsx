import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import Divider from "components/Portfolio/common/Divider";
import TechStack from "./TechStack";
import ProfileImage from "public/images/profile.png";
import { palette } from "styles/palette";

interface Props {}

const Hero = (props: Props) => {
  return (
    <Container>
      <Title>👋🏻 안녕하세요, 찬민입니다!</Title>
      <Content>
        <Profile>
          <Image src={ProfileImage} alt="프로필 이미지" />
          <p className="profile-description">2021년 11월, 서울숲에 놀러갔을 때에요! 😆</p>
        </Profile>
        <div>
          <Description>
            성장과 공유를 기쁨으로 생각하며, 새로운 기술을 배우는 데 주저하지 않습니다.
          </Description>
          <Divider />
          <TechStack />
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 3rem 5rem 3rem 5rem;
  @media (max-width: 768px) {
    & {
      padding: 1rem 3rem 1rem 3rem;
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

const Profile = styled.div`
  width: 300px;

  .profile-description {
    font-size: 0.875rem;
    margin: 0.5rem 0;
    color: ${palette.grey[500]};
  }
`;

const Content = styled.div`
  display: flex;
  gap: 3rem;
`;

const Description = styled.p`
  padding-top: 0.5rem;
  line-height: 1.5;
  font-size: 14px;
`;

export default Hero;
