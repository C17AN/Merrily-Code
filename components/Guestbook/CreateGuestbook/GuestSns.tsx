import styled from "@emotion/styled";
import Link from "next/link";
import React, { useMemo } from "react";
import { AiOutlineGithub, AiOutlineHome } from "react-icons/ai";

export type SnsType = "github" | "homepage";

type GuestSnsProps = {
  snsType: SnsType;
  targetUrl: string;
};

const renderSnsIcon = (snsType: SnsType) => {
  switch (snsType) {
    case "github":
      return <AiOutlineGithub size={18} />;
    case "homepage":
      return <AiOutlineHome size={18} />;
    default:
      return <AiOutlineHome size={18} />;
  }
};

const GuestSns = ({ snsType, targetUrl }: GuestSnsProps) => {
  const snsIcon = useMemo(() => renderSnsIcon(snsType), [snsType]);

  return (
    <Container>
      <div>{snsIcon}</div>
      <a href={targetUrl} target="_blank" rel="noreferrer">
        {targetUrl}
      </a>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0.125rem 0;
  gap: 0.5rem;

  & > a {
    font-size: 0.75rem;
  }
`;

export default GuestSns;
