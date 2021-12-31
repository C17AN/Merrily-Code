import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

type Button = {
  size?: "big" | "medium" | "small";
};

const Button = styled(motion.button)`
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  &:hover {
  }
`;

export default Button;
