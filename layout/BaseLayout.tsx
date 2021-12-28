import React, { ReactNode, useState } from "react";
import styled from "@emotion/styled";
import Header from "components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "components/common/Footer";
import { palette } from "styles/palette";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebarVisible = () => {
    setIsSidebarOpen((isOpen) => !isOpen);
  };

  return (
    <Container isOpen={isSidebarOpen}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebarVisible} />
      <Content>
        <Header toggleSidebar={toggleSidebarVisible} />
        <PageContent>{children}</PageContent>
        <Footer />
      </Content>
    </Container>
  );
};

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  @media (max-width: 768px) {
    height: 100%;
    overflow: ${({ isOpen }) => isOpen && "hidden"};
  }
`;

const Content = styled.div`
  display: flex;
  max-width: 100%;
  flex: 1;
  flex-direction: column;
`;

const PageContent = styled.div`
  padding: 3rem 5rem;
  color: ${palette.grey[700]};

  @media (max-width: 768px) {
    & {
      padding: 1rem 1.5rem 1rem 1.5rem;
    }
  }
`;

export default BaseLayout;
