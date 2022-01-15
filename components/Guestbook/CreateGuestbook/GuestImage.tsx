import styled from "@emotion/styled";
import Image from "next/image";
import RoundImageWrapper from "components/common/RoundImageWrapper";
import React, { ChangeEvent, useContext, useState } from "react";
import { palette } from "styles/palette";
import { GuestInfoProvider } from ".";

const profileCircleVariants = {
  zoom: {
    scale: 1.1,
  },
};

const defaultImage = "/images/avatar-blank.png";

const GuestImage = () => {
  const [guestImage, setGuestImage] = useState(defaultImage);
  const { guestForm, updateGuestForm } = useContext(GuestInfoProvider);
  const isDefaultImage = guestImage === defaultImage;
  const ImageGuideText = isDefaultImage ? "방명록 이미지를 선택하세요" : "멋진 사진이네요! 😆";

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files[0] || guestForm["guestImage"];
    const dataUrl = URL.createObjectURL(fileName);
    const { name } = e.target;
    setGuestImage(dataUrl);
    updateGuestForm(name, dataUrl);
  };

  return (
    <Container isDefaultImage={isDefaultImage}>
      <label htmlFor="profile-upload">
        <GuestbookImage variants={profileCircleVariants} whileHover={"zoom"}>
          <Image src={guestImage} width={64} height={64} alt="이미지 업로드" />
        </GuestbookImage>
        <Input
          type="file"
          id="profile-upload"
          onChange={handleImageUpload}
          name="guestImage"
          value={}
        />
      </label>
      <p>{ImageGuideText}</p>
    </Container>
  );
};

const Container = styled.section<{ isDefaultImage: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem 0 1rem 0;

  & > label {
  }

  & > p {
    color: ${({ isDefaultImage }) => (isDefaultImage ? palette.grey[300] : palette.green[500])};
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;

const GuestbookImage = styled(RoundImageWrapper)`
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

export default GuestImage;
