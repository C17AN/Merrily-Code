import styled from "@emotion/styled";
import Input from "components/common/Input/input";
import React, { ChangeEvent, useContext } from "react";
import { palette } from "styles/palette";
import { GuestFormProvider } from ".";

const GuestName = () => {
  const { guestForm, updateGuestForm } = useContext(GuestFormProvider);

  const handleGuestNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateGuestForm(name, value);
  };

  return (
    <Container>
      <p>이름 (닉네임)</p>
      <Input
        placeholder="Ex. Ethan Kim"
        name={"guestName"}
        value={guestForm["guestName"]}
        autoComplete="off"
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

export default GuestName;
