import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import GuestbookProfile from "type/GuestbookProfile";
import RoundImageWrapper from "components/common/RoundImageWrapper";
import ProfileLabel from "../ProfileLabel";
import { palette } from "styles/palette";
import { motion } from "framer-motion";

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
}: GuestbookProfile) => {
  return (
    <Container variants={variants} whileHover={"zoom"}>
      <BasicInfo>
        <RoundImageWrapper>
          <Image src={image} width={64} height={64} layout="fixed" alt={name} />
        </RoundImageWrapper>
        <div className="profile-name">{name}</div>
      </BasicInfo>
      <AdditionalInfo>
        <p className="profile-description">{description}</p>
        <LabelContainer>
          <ProfileLabel text="프론트엔드" color="red" />
        </LabelContainer>
      </AdditionalInfo>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  padding: 1.5rem;
  gap: 1.5rem;
  flex: 1 20%;
  justify-content: flex-start;
  align-items: center;
  background-color: #ececec42;
  backdrop-filter: blur(50px);
  border: 2px solid white;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 16px 0 rgba(109, 109, 109, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;

  .profile-name {
    font-weight: 700;
    font-size: 1.125rem;
    margin: 0.375rem 0;
  }

  .profile-description {
    color: ${palette.grey[300]};
    font-size: 0.875rem;
    line-height: 1.5;
    white-space: pre-line;
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const LabelContainer = styled.ul`
  margin-top: 0.5rem;
`;

const BasicInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const AdditionalInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ProfileCard;
