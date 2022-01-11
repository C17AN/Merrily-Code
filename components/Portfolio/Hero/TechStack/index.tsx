import React, { createContext, useState } from "react";
import styled from "@emotion/styled";
import SubTitle from "components/Portfolio/common/SubTitle";
import TeckStackList from "./List";
import Image from "next/image";
import useTechStackCategory from "hooks/useTechStackCategory";
import TechStackDescription from "./Description";
import TechStack from "type/TechStack";
import { palette } from "styles/palette";

export type TechCategory = "frontEnd" | "backEnd" | "mobile" | "devOps" | "cloud";

export const DescriptionContext = createContext<any>(null);

const TechStack = () => {
  const { techName, techCode, setTechSlideIndex } = useTechStackCategory(0);
  const [isTechDescriptionOpen, setIsTechDescriptionOpen] = useState(false);
  const [selectedTechStack, setSelectedTechStack] = useState<TechStack | null>(null);

  const openTechDescription = (techStackData: TechStack) => {
    setSelectedTechStack(() => techStackData);
    setIsTechDescriptionOpen(true);
  };

  const closeTechDescription = () => {
    setIsTechDescriptionOpen(false);
  };

  return (
    <div>
      <TitleContainer>
        <Image src="/icons/tech.gif" width={24} height={24} layout="intrinsic" alt="기술 스택" />
        <SubTitle>Tech Stacks</SubTitle>
        <p className="stack-type">{techName}</p>
      </TitleContainer>
      <DescriptionContext.Provider
        value={{
          isTechDescriptionOpen,
          openTechDescription,
          closeTechDescription,
        }}
      >
        <TeckStackList setTechSlideIndex={setTechSlideIndex} />
      </DescriptionContext.Provider>
      {selectedTechStack && (
        <TechStackDescription techStackData={selectedTechStack} isVisible={isTechDescriptionOpen} />
      )}
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
