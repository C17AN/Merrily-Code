import React, { useState } from "react";
import styled from "@emotion/styled";
import Divider from "components/common/Divider";
import ProfileCard from "./ProfileCard";
import Button from "components/common/Button";
import Modal from "components/common/Modal";
import CreateGuestbook from "./CreateGuestbook";
import ButtonVariant from "type/variants/Button";
import { FiUserCheck } from "react-icons/fi";
import { palette } from "styles/palette";

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
          {"들러주셔서 감사드려요!\n이곳에서 멋진 카드로 방문 기록을 남겨보세요!"}
        </TitleDescription>
        <Button onClick={openCreateModal} icon={<FiUserCheck />} {...createButtonVariant}>
          방명록 추가하기
        </Button>
      </SubTitle>
      <Divider />
      <ProfileCardList>
        <ProfileCard
          image="/images/avatar.png"
          name="찬민"
          primaryColor="#2727ff"
          description={"안녕하세요, 세바스찬입니다!\n블로그 잘 보고가요!"}
        />
        <ProfileCard
          name="Ethan, Kim (김찬민)"
          description="안녕하세요, 찬민입니다"
          primaryColor="#34ebc9"
          secondaryColor="#2f851a"
        />
        <ProfileCard name="찬민" description="안녕하세요, 찬민입니다" primaryColor="#eb3477" />
      </ProfileCardList>
      {isCreateModalOpen && (
        <Modal
          title="방명록 추가하기"
          body={<CreateGuestbook />}
          answerType="multi"
          width={420}
          height={450}
          closeModal={closeCreateModal}
          leftText="취소하기"
          rightText="방명록 남기기"
          leftButtonVariant={ModalCancelButtonVariant}
          rightButtonVariant={ModalConfirmButtonVariant}
          onRightButtonClick={() => {}}
          onLeftButtonClick={() => {}}
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

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      gap: 1rem;
    }

    & > button {
    }
  }
`;

const TitleDescription = styled.h6`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.grey[300]};
  white-space: pre-line;
  line-height: 1.5;
`;

const ProfileCardList = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  flex-wrap: wrap;
  border-radius: 0.5rem;
`;

const createButtonVariant: ButtonVariant = {
  backgroundColor: palette.white,
  color: palette.grey[300],
  hoverColor: palette.grey[500],
  hoverBackgroundColor: palette.grey[50],
};

const ModalCancelButtonVariant: ButtonVariant = {
  color: palette.white,
  backgroundColor: palette.red[100],
  hoverBackgroundColor: palette.red[300],
};

const ModalConfirmButtonVariant: ButtonVariant = {
  color: palette.white,
  backgroundColor: palette.green[400],
  hoverBackgroundColor: palette.green[300],
};

export default Guestbook;
