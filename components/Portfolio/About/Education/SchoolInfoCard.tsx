import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

interface Props {}

const SchoolInfoCard = (props: Props) => {
  return <Container></Container>;
};

const Container = styled.div`
  padding: 1rem;
  width: 300px;
  height: 200px;
  border: 1px solid ${palette.grey[50]};
`;

export default SchoolInfoCard;
