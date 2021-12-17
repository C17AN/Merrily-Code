import SubTitle from "components/Portfolio/common/SubTitle";
import React from "react";
import TeckStackList from "./List";

interface Props {}

const TechStack = (props: Props) => {
  return (
    <div>
      <SubTitle>⚙️ Tech Stacks</SubTitle>
      <TeckStackList />
    </div>
  );
};

export default TechStack;
