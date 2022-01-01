import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import TechStack from "type/TechStack";
import TechStackItem from "./Item";

interface Props {
  name: string;
  itemList: TechStack[];
}

const Slide = ({ itemList }: Props) => {
  return (
    <Container>
      {itemList.map((item) => {
        const { icon, name, description } = item;
        return <TechStackItem key={name} icon={icon} name={name} description={description} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default Slide;
