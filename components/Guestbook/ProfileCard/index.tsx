import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import GuestbookProfile from "type/GuestbookProfile";
import RoundImageWrapper from "components/common/RoundImageWrapper";
import PositionLabel from "../PositionLabel";
import { palette } from "styles/palette";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import Divider from "components/Portfolio/common/Divider";
import CardBorderDecoration from "./CardBorderDecoration";
import GuestSns from "../CreateGuestbook/GuestSns";

const variants = {
  zoom: {
    scale: 1.08,
  },
};

const ProfileCard = ({
  image = "/images/avatar-blank.png",
  name,
  color,
  description,
  techStack,
}: GuestbookProfile) => {
  return (
    <Container variants={variants} color={color} whileHover={"zoom"}>
      <CardBorderDecoration />
      <div className="profile-info-container">
        <BasicInfo>
          <RoundImage>
            <Image src={image} layout="fill" objectFit="fill" alt={name} />
          </RoundImage>
          <div className="profile-basic-info">
            <div className="profile-name">{name}</div>
            <LabelContainer>
              <PositionLabel text="프론트엔드 개발자" color="red" />
            </LabelContainer>
          </div>
        </BasicInfo>
        <Divider />
        <AdditionalInfo>
          <p className="profile-message">{description}</p>
          <GuestSns snsType="github" targetUrl="https://naver.com" />
          <GuestSns snsType="homepage" targetUrl="https://naver.com" />
        </AdditionalInfo>
      </div>
    </Container>
  );
};

const Container = styled(motion.div)<GuestbookProfile>`
  display: flex;
  width: 25rem;
  min-width: 20rem;
  max-width: 95%;
  justify-content: flex-start;
  backdrop-filter: blur(50px);
  border-radius: 0.5rem;
  box-shadow: 0 8px 16px 0px ${({ color }) => "rgba(109, 109, 109, 0.37)"};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;

  .profile-info-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 1.5rem;
  }

  .profile-name {
    color: ${palette.black};
    font-weight: 700;
    font-size: 1.125rem;
  }

  .profile-message {
    color: ${palette.grey[500]};
    font-size: 0.875rem;
    line-height: 1.65;
    white-space: pre-line;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    & {
      flex: 1;
    }

    .profile-name {
      font-size: 1rem;
    }

    .profile-info-container {
      margin: 1rem;
    }
  }
`;

const LabelContainer = styled.ul`
  margin-top: 0.75rem;

  @media (max-width: 768px) {
    & {
      margin-top: 0.5rem;
    }
  }
`;

const RoundImage = styled.div`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 64px;
  height: 64px;

  @media (max-width: 768px) {
    & {
      width: 48px;
      height: 48px;
    }
  }
`;

const BasicInfo = styled.section`
  display: flex;
  gap: 1.25rem;

  .profile-basic-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    .profile-basic-info {
      margin: 0.25rem 0;
    }
  }
`;

const AdditionalInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ProfileCard;
