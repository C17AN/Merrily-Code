import React from "react";
import styled from "@emotion/styled";

type ProfileLabelProps = {
  text: string;
  color: string;
};

const ProfileLabel = ({ text, color }: ProfileLabelProps) => {
  return <Container>{text}</Container>;
};

const Container = styled.li`
  border-radius: 40px;
  background-color: red;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  white-space: nowrap;
`;

export default ProfileLabel;
