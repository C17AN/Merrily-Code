import React, { ReactNode } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

export type InfoItemProps = {
  icon: string;
  title: string;
  description?: string;
  startedAt?: string;
  endedAt?: string;
};

const InfoItem = ({ icon, title, description, startedAt, endedAt }: InfoItemProps) => {
  const setInfoYearText = (): string => {
    if (startedAt && endedAt) {
      return `${startedAt} ~ ${endedAt}`;
    } else if (startedAt) {
      return `${startedAt} ~ 현재`;
    } else {
      return `${endedAt}`;
    }
  };

  return (
    <Container>
      {icon && <Image src={icon} width={48} height={48} alt={title} />}
      <div className="information-content">
        <h2 className="information-name">{title}</h2>
        <h3>{description}</h3>
      </div>
      <div className="information-year">{setInfoYearText()}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out background-color;

  &:hover {
    background-color: ${palette.grey[50]};
  }

  .information-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-left: 0.25rem;

    h2 {
      font-size: 1rem;
      margin-bottom: 0.125rem;
      white-space: nowrap;
    }
    h3 {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${palette.grey[400]};
      white-space: nowrap;
    }
  }

  .information-name {
  }

  .information-year {
    text-align: right;
    font-size: 0.875rem;
    color: ${palette.grey[500]};
  }
`;

export default InfoItem;
