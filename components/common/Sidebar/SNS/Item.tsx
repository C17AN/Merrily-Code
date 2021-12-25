import styled from "@emotion/styled";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillHome,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { palette } from "styles/palette";
import { SNSName } from "type/user";

type SNSItemProps = {
  name: string;
  link: string;
};

const setSNSIcon = (name: string) => {
  switch (name) {
    case "github":
      return <AiFillGithub color={"#000"} />;
    case "linkedIn":
      return <AiFillLinkedin color={"#2867B2"} />;
    case "facebook":
      return <AiFillFacebook color={"#4267B2"} />;
    case "instagram":
      return <AiOutlineInstagram color={"#C13584"} />;
    case "homepage":
      return <AiFillHome color={"#000"} />;
    default:
      return;
  }
};

const SNSItem = ({ name, link }: SNSItemProps) => {
  return (
    <Container>
      <>{setSNSIcon(name)}</>
      <p>{name}</p>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease-in-out background-color;

  &:hover {
    background-color: ${palette.notion.sidebar.hover};
  }

  & > p {
    display: inline-block;
    vertical-align: bottom;
    font-weight: 400;
    color: ${palette.notion.sidebar.text};
    text-transform: capitalize;
  }

  & > svg {
    font-size: 20px;
  }
`;

export default SNSItem;
