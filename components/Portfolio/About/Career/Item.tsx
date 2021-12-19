import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

const CareerItem = () => {
  return (
    <Container>
      <Image src="/images/travelflan-logo.jpg" width={48} height={48} alt="프리디그룹엘티디" />
      <div className="company-info">
        <h2 className="company-name">프리디그룹엘티디</h2>
        <h3>프론트엔드 ICT 인턴십 인턴</h3>
      </div>
      <div className="company-year">2021.09 ~ 2022.03</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.375rem 1rem 0.375rem 0.5rem;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out background-color;

  &:hover {
    background-color: ${palette.grey[50]};
  }

  .company-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h2 {
      font-size: 1rem;
      margin-bottom: 0.125rem;
    }
    h3 {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${palette.grey[400]};
    }
  }

  .company-name {
  }

  .company-year {
    text-align: right;
    font-size: 0.875rem;
    color: ${palette.grey[500]};
  }
`;

export default CareerItem;
