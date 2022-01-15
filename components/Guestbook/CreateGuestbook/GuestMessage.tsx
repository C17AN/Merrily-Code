import styled from "@emotion/styled";
import TextArea from "components/common/TextArea";
import React, { ChangeEvent, useContext } from "react";
import { palette } from "styles/palette";
import { GuestFormProvider } from ".";

const GuestMessage = () => {
  const { guestForm, updateGuestForm } = useContext(GuestFormProvider);

  const handleGuestNameChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateGuestForm(name, value);
  };

  return (
    <Container>
      <p>메시지 남기기 (최대 100자)</p>
      <TextArea
        maxLength={100}
        name="guestMessage"
        value={guestForm["guestMessage"]}
        onChange={handleGuestNameChange}
      />
    </Container>
  );
};

const Container = styled.section`
  margin-bottom: 0.5rem;

  & > p {
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${palette.grey[500]};
  }
`;

export default GuestMessage;
