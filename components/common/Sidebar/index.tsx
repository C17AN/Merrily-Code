import styled from "@emotion/styled";
import React from "react";
import Category from "./Category";
import EmailCard from "./EmailCard";
import SNSList from "./SNS/List";
import { palette } from "styles/palette";
import ControlButtons from "./ControlButtons";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: "15rem" },
};

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <>
      <BackDrop />
      <Container
        variants={animationVariants}
        animate={isOpen ? "visible" : "hidden"}
        initial={isOpen ? "visible" : "hidden"}
      >
        <ControlButtons />
        <EmailCard />
        <SNSList />
        <Category />
      </Container>
    </>
  );
};

const BackDrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Container = styled(motion.div)`
  width: 15rem;
  overflow: hidden;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 1rem;
  background-color: ${palette.notion.sidebar.primary};
  color: ${palette.notion.sidebar.text};

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
`;

export default Sidebar;
