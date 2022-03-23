import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import SubTitle from "./SubTitle";
import Divider from "components/common/Divider";

type TitleProps = {
  iconPath?: string;
  iconWidth?: number;
  iconHeight?: number;
  title: string;
};

const Title = ({ iconPath, title, iconWidth = 28, iconHeight = 28 }: TitleProps) => {
  return (
    <>
      <TitleContainer>
        {iconPath && (
          <Image
            src={iconPath}
            width={iconWidth}
            height={iconHeight}
            layout="intrinsic"
            alt={title}
          />
        )}
        <SubTitle>{title}</SubTitle>
      </TitleContainer>
      <Divider />
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > h2 {
    margin-bottom: 0;
    margin-left: 0.25rem;
  }
`;

export default Title;
