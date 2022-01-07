import styled from "@emotion/styled";
import Button from "components/common/Button";
import RoundImageWrapper from "components/common/RoundImageWrapper";
import Image from "next/image";
import React, { useState } from "react";
import { palette } from "styles/palette";

interface Props {}

const PositionList = [
  { label: "프론트엔드", value: "frontend" },
  { label: "백엔드", value: "backend" },
  { label: "디자이너", value: "designer" },
  { label: "기획자", value: "planner" },
];

const CreateGuestbook = (props: Props) => {
  const defaultImage = "/images/avatar-blank.png";
  const [guestImage, setGuestImage] = useState<any>(defaultImage);

  const handleImageUpload = (e) => {
    const fileName = e.target.files[0];
    const dataUrl = URL.createObjectURL(fileName);
    setGuestImage(dataUrl);
  };

  return (
    <Container>
      <label htmlFor="profile-upload">
        <GuestbookImage>
          <Image src={guestImage} width={80} height={80} alt="이미지 업로드" />
        </GuestbookImage>
        <Input type="file" id="profile-upload" onChange={handleImageUpload} />
        <p className="image-guide-text">방명록 이미지를 선택하세요</p>
      </label>
      {PositionList.map((position) => {
        const { label, value } = position;
        return <div key={value}>{label}</div>;
      })}
    </Container>
  );
};

const Container = styled.section`
  .image-guide-text {
    color: ${palette.grey[200]};
    font-size: 0.875rem;
  }
`;

const Input = styled.input`
  display: none;
`;

const GuestbookImage = styled(RoundImageWrapper)`
  cursor: pointer;
`;

export default CreateGuestbook;
