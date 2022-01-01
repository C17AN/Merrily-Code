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
      {itemList.map((item, index) => {
        const { icon, name, description } = item;
        return (
          <TechStackItem
            key={name}
            index={index}
            icon={icon}
            name={name}
            description={description}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 1rem;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  background: rgb(231, 231, 231);
  background: linear-gradient(180deg, rgba(231, 231, 231, 0.3) 14%, rgba(181, 181, 181, 0.3) 93%);

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default Slide;
