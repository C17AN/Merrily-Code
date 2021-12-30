import styled from "@emotion/styled";
import SubTitle from "components/Portfolio/common/SubTitle";
import React from "react";
import TeckStackList from "./List";
import Image from "next/image";
import Divider from "components/Portfolio/common/Divider";

interface Props {}

const TechStack = (props: Props) => {
  return (
    <div>
      <TitleContainer>
        <Image src="/icons/tech.gif" width={24} height={24} layout="intrinsic" alt="기술 스택" />
        <SubTitle>Tech Stacks</SubTitle>
      </TitleContainer>
      <TeckStackList />
    </div>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  height: 100%;

  & > h2 {
    margin-bottom: 0;
  }
`;

export default TechStack;
