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
    <Container variants={variants} color={color} whileHover={"zoom"}>
      <BasicInfo>
        <RoundImage>
          <Image src={image} width={64} height={64} layout="fixed" alt={name} />
        </RoundImage>
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

const Container = styled(motion.div)<GuestbookProfile>`
  display: flex;
  padding: 1.5rem;
  gap: 1.5rem;
  flex: 1 20%;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ color }) => color || "#ececec42"};
  backdrop-filter: blur(50px);
  border-radius: 0.5rem;
  box-shadow: 0 8px 32px 0px ${({ color }) => (color ? color + "90" : "rgba(109, 109, 109, 0.37)")};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  cursor: pointer;

  .profile-name {
    color: ${palette.grey[50]};
    font-weight: 700;
    font-size: 1.125rem;
    margin-top: 0.75rem;
  }

  .profile-description {
    color: ${palette.grey[50]};
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

const RoundImage = styled(RoundImageWrapper)`
  border: 2px solid ${palette.grey[100]};
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
