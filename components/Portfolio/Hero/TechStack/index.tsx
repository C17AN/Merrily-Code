import React, { createContext, useState } from "react";
import styled from "@emotion/styled";
import SubTitle from "components/Portfolio/common/SubTitle";
import TeckStackList from "./List";
import Image from "next/image";
import useTechStackCategory from "hooks/useTechStackCategory";
import TechStackDescription from "./Description";
import TechStackType from "type/TechStack";
import { palette } from "styles/palette";
import TechStackData from "data/about/TechStackData";

export type TechCategory = "frontEnd" | "backEnd" | "mobile" | "devOps" | "cloud";

export const DescriptionContext = createContext<any>(null);

const TechStack = () => {
  const { techName, techCode, setTechSlideIndex } = useTechStackCategory(0);
  const { frontEnd } = TechStackData;
  const [selectedTechStack, setSelectedTechStack] = useState<TechStackType | null>(
    frontEnd.techStackList[0]
  );

  const selectTechStack = (techStackData: TechStackType) => {
    setSelectedTechStack(() => techStackData);
  };

  const closeTechDescription = () => {};

  return (
    <div>
      <TitleContainer>
        <Image src="/icons/tech.gif" width={24} height={24} layout="intrinsic" alt="기술 스택" />
        <SubTitle>Tech Stacks</SubTitle>
        <p className="stack-type">{techName}</p>
      </TitleContainer>
      <DescriptionContext.Provider
        value={{
          selectedTechStack,
          selectTechStack,
          closeTechDescription,
        }}
      >
        <TeckStackList setTechSlideIndex={setTechSlideIndex} />
      </DescriptionContext.Provider>
      {selectedTechStack && <TechStackDescription techStackData={selectedTechStack} />}
    </div>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  height: 100%;

  .stack-type {
    font-size: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${palette.grey[50]};
    border: 1px solid ${palette.grey[100]};
    padding: 0.25rem 0.5rem;
  }

  & > h2 {
    margin-bottom: 0;
  }
`;

export default TechStack;
