import styled from "@emotion/styled";
import RoundImageWrapper from "components/common/RoundImageWrapper";
import Image from "next/image";
import React from "react";

interface Props {}

const CreateGuestbook = (props: Props) => {
  return (
    <Container>
      <label htmlFor="profile-upload">
        <RoundImageWrapper>
          <Image src="/images/avatar-blank.png" width={64} height={64} alt="이미지 업로드" />
        </RoundImageWrapper>
      </label>
      <Input type="file" id="profile-upload" />
      <p>방명록을 생성합니다.</p>
    </Container>
  );
};

const Container = styled.section``;

const Input = styled.input`
  display: none;
`;

export default CreateGuestbook;
