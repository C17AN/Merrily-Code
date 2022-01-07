import React, { useState } from "react";
import styled from "@emotion/styled";
import Divider from "components/Portfolio/common/Divider";
import ProfileCard from "./ProfileCard";
import Button from "components/common/Button";
import { palette } from "styles/palette";
import Modal from "components/common/Modal";
import CreateGuestbook from "./CreateGuestbook";

const Guestbook = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <Container>
      <Title>📋 방명록</Title>
      <SubTitle>
        <TitleDescription>
          {"들러 주셔서 감사드려요!\n이곳에 방문 기록을 남기실 수 있어요!"}
        </TitleDescription>
        <Button onClick={openCreateModal}>방명록 추가하기</Button>
      </SubTitle>
      <Divider />
      <GlassDisplayContainer>
        <ProfileCard
          image="/images/avatar.png"
          name="찬민"
          description="안녕하세요, 찬민입니다"
          color="red"
        />
        <ProfileCard
          image="/images/avatar.png"
          name="찬민"
          description="안녕하세요, 찬민입니다"
          color="red"
        />
        <ProfileCard
          image="/images/avatar.png"
          name="찬민"
          description="안녕하세요, 찬민입니다"
          color="red"
        />
        <ProfileCard name="찬민" description="안녕하세요, 찬민입니다" color="red" />
        <ProfileCard name="찬민" description="안녕하세요, 찬민입니다" color="red" />
      </GlassDisplayContainer>
      {isCreateModalOpen && (
        <Modal
          title="방명록 추가하기"
          body={<CreateGuestbook />}
          answerType="multi"
          width={450}
          height={360}
          closeModal={closeCreateModal}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    & {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleDescription = styled.h6`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.grey[300]};
  white-space: pre-line;
  line-height: 1.5;
`;

const GlassDisplayContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  border-radius: 0.5rem;
`;

export default Guestbook;
