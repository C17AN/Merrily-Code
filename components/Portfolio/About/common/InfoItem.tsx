import React, { ReactNode } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import useIsMobile from "hooks/useIsMobile";
import { palette } from "styles/palette";

export type InfoItemProps = {
  icon: string;
  title: string;
  description?: string;
  startedAt?: string;
  endedAt?: string;
  targetUrl?: string;
};

const InfoItem = ({ icon, title, description, startedAt, endedAt, targetUrl }: InfoItemProps) => {
  const isMobile = useIsMobile();
  const responsiveLogoSize = isMobile ? 36 : 48;

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
      <Content>
        {icon && (
          <Image src={icon} width={responsiveLogoSize} height={responsiveLogoSize} alt={title} />
        )}
        <div className="information-content">
          <div>
            <h2 className="information-name">{title}</h2>
            <h3>{description}</h3>
          </div>
          <div className="information-year">{setInfoYearText()}</div>
        </div>
      </Content>
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
    align-items: center;
    margin-left: 1rem;

    h2 {
      font-size: 1rem;
      margin-bottom: 0.375rem;
      white-space: nowrap;
    }
    h3 {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${palette.grey[400]};
      white-space: nowrap;
      margin-bottom: 0.125rem;
    }
  }

  .information-year {
    text-align: right;
    font-size: 0.875rem;
    color: ${palette.grey[500]};
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: flex-start;
      padding: 0.625rem 0.25rem;
    }

    .information-content {
      gap: 0.25rem;
      flex-direction: column;

      h2 {
        font-size: 0.875rem;
      }
      h3 {
        font-size: 0.625rem;
      }
    }

    .information-year {
      text-align: left;
      font-size: 0.625rem;
      color: ${palette.grey[500]};
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

export default InfoItem;
