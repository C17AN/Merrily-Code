import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { palette } from "styles/palette";

type BasePageLayoutProps = {
  children: ReactNode;
};

const BasePageLayout = ({ children }: BasePageLayoutProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 3rem 5rem;
  color: ${palette.grey[700]};

  @media (max-width: 768px) {
    & {
      padding: 1rem 1.5rem 1rem 1.5rem;
    }
  }
`;

export default BasePageLayout;
