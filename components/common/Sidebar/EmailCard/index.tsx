import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import { palette } from "styles/palette";

interface Props {}

const EmailCard = (props: Props) => {
  return (
    <Link href="/" passHref>
      <Container>
        <InitialBox>찬</InitialBox>
        <InfoContainer>
          <Name>찬민</Name>
          <Email>kimchanmin1@gmail.com</Email>
        </InfoContainer>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: 0.2s ease-in-out background-color;
  cursor: pointer;

  &:hover {
    background-color: ${palette.notion.sidebar.hover};
  }
`;

const InitialBox = styled.div`
  width: 24px;
  height: 24px;
  padding-top: 2px;
  margin-right: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 3px;
  color: white;
  line-height: 1;
  font-size: 14px;
  background-color: ${palette.notion.sidebar.initialBox};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #000;
  margin-bottom: 0.4rem;
`;

const Email = styled.p`
  font-size: 11px;
  color: ${palette.grey[500]};
`;

export default EmailCard;
