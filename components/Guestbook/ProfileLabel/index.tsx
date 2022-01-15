import React from "react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";
import { motion, MotionStyle } from "framer-motion";

type ProfileLabelProps = {
  text: string;
  color: string;
};

const ProfileLabel = ({ text, color }: ProfileLabelProps) => {
  return <Container>{text}</Container>;
};

const Container = styled.li`
  display: inline-block;
  border-radius: 40px;
  background-color: ${palette.skyBlue[50]};
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  white-space: nowrap;
`;

export default ProfileLabel;
