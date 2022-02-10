import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import TechStack from "type/TechStack";
import Image from "next/image";
import useIsMobile from "hooks/useIsMobile";
import { palette } from "styles/palette";
import { motion } from "framer-motion";
import { DescriptionContext } from ".";

const variants = {
  selected: {
    transition: {
      duration: 0.2,
    },
    backgroundColor: palette.white,
    borderColor: palette.grey[500],
    color: palette.black,
  },
  unSelected: {
    transition: {
      duration: 0.2,
    },
    backgroundColor: palette.white + "00",
    borderColor: "rgba(255, 255, 255, 0.18)",
    color: palette.grey[300],
  },
};

type TechStackItemProps = {
  techStackData: TechStack;
  index: number;
};

const TechStackItem = ({ techStackData, index }: TechStackItemProps) => {
  const isMobile = useIsMobile();
  const responsiveImageSize = isMobile ? 48 : 64;
  const { selectTechStack, closeTechDescription, selectedTechStack } =
    useContext(DescriptionContext);
  const { name, icon } = techStackData;
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(techStackData.name === selectedTechStack?.name);
  }, [techStackData, selectedTechStack]);

  return (
    <>
      <Container
        variants={variants}
        whileHover="hover"
        animate={isSelected ? "selected" : "unSelected"}
        onClick={() => selectTechStack(techStackData)}
        onMouseEnter={() => selectTechStack(techStackData)}
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 20%;

  box-shadow: 0 8px 32px 0 rgba(110, 110, 110, 0.37);
  border-radius: 10px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  .techstack-name {
    font-size: 0.75rem;
    margin-top: 0.625rem;
    text-align: center;
    text-transform: capitalize;
    line-height: 1.4;
    transition: 0.2s ease-in-out all;
  }

  @media (max-width: 768px) {
    flex: 1 15%;
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 8px;
`;

export default TechStackItem;
