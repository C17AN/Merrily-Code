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
    scale: 1.05,
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
      <RoundImageWrapper>
        <Image src={image} width={64} height={64} alt={name} />
      </RoundImageWrapper>
      <div className="profile-name">{name}</div>
      <p className="profile-description">{description}</p>
      <LabelContainer>
        <ProfileLabel text="프론트엔드" color="red" />
      </LabelContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  flex: 1 20%;
  max-width: 40%;
  justify-content: center;
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
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    flex: 1 80%;
  }
`;

const LabelContainer = styled.ul`
  margin-top: 0.5rem;
`;

export default ProfileCard;
