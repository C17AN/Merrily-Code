import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

type Props = {};

const BannerButton = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.button`
  border: 1px solid ${palette.grey[100]};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  border-radius: 0.75rem;
  font-size: 1.25rem;
  color: ${palette.grey[100]};
  background-image: url(/images/greeting-image.jpg);
`;

export default BannerButton;
