import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import TechStack from "type/TechStack";
import Image from "next/image";
import Modal from "components/common/Modal";
import useIsMobile from "hooks/useIsMobile";
import { palette } from "styles/palette";
import { motion } from "framer-motion";
import { DescriptionContext } from ".";

const variants = {
  hover: {
    scale: 1.04,
    transition: {
      duration: 0.2,
    },
    backgroundColor: palette.grey[50],
  },
};

const TechStackItem = ({ icon, name, index }: TechStack & { index: number }) => {
  const isMobile = useIsMobile();
  const responsiveImageSize = isMobile ? 48 : 64;
  const { openTechDescription, closeTechDescription } = useContext(DescriptionContext);
  return (
    <>
      <Container
        variants={variants}
        whileHover="hover"
        animate="fadeIn"
        onMouseEnter={openTechDescription}
        onMouseLeave={closeTechDescription}
      >
        <RoundedImage
          src={icon}
          width={responsiveImageSize}
          height={responsiveImageSize}
          alt={name}
        />
        <p className="techstack-name">{name}</p>
      </Container>
    </>
  );
};

const Container = styled(motion.div)`
  border-radius: 8px;
  border: 1px solid ${palette.grey[50]};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 20%;

  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(110, 110, 110, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  .techstack-name {
    color: ${palette.grey[300]};
    font-size: 0.75rem;
    margin-top: 0.625rem;
    text-align: center;
    text-transform: capitalize;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    flex: 1 15%;
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 8px;
`;

export default TechStackItem;
