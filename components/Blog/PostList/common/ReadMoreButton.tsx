import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { BiChevronRight } from "react-icons/bi";

interface Props {}

const ReadMoreButton = (props: Props) => {
  return (
    <Container>
      <p>읽어보기</p>
      <BiChevronRight />
    </Container>
  );
};

const Container = styled(motion.button)`
  opacity: 0;
  display: flex;
`;

export default ReadMoreButton;
