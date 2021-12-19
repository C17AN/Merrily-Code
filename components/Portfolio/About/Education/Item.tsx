import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

interface Props {}

const EducationItem = (props: Props) => {
  return (
    <Container>
      <Image src="/images/university-logo.jpg" width={48} height={48} alt="한국항공대학교" />
      <div className="school-info">
        <h2 className="school-name">한국항공대학교</h2>
        <h3>AI융합대학 소프트웨어학과</h3>
      </div>
      <div className="school-year">2017.02 ~ 2023.02</div>
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

  .school-info {
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

  .school-name {
  }

  .school-year {
    text-align: right;
    font-size: 0.875rem;
    color: ${palette.grey[500]};
  }
`;

export default EducationItem;
