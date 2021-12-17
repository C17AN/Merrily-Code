import React, { ReactNode, useState } from "react";
import styled from "@emotion/styled";
import Header from "components/common/Header";
import Sidebar from "../components/common/Sidebar";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarVisible = () => {
    setIsSidebarOpen((isOpen) => !isOpen);
  };

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} />
      <Content>
        <Header toggleSidebar={toggleSidebarVisible} />
        <>{children}</>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default BaseLayout;
