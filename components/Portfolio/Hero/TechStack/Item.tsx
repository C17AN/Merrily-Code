import styled from "@emotion/styled";
import React from "react";
import TechStack from "type/TechStack";
import Image from "next/image";
import { palette } from "styles/palette";
import useIsMobile from "hooks/useIsMobile";

const TechStackItem = ({ icon, name }: TechStack) => {
  const isMobile = useIsMobile();
  const responsiveImageSize = isMobile ? 46 : 64;

  return (
    <Container>
      <RoundedImage
        src={icon}
        width={responsiveImageSize}
        height={responsiveImageSize}
        alt={name}
      />
      <p className="techstack-name">{name}</p>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 8px;
  border: 1px solid ${palette.grey[50]};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 20%;

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
