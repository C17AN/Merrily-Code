import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";
import AdditionalGuestInfo from "./AdditionalGuestInfo";
import BasicGuestInfo from "./BasicGuestInfo";

enum GuestbookCreateMenu {
  BASIC_INFO,
  ADDITIONAL_INFO,
}

type GuestForm = {
  [key in GuestBookForm]: string;
};

const animationVariants = {
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

type GuestBookForm = "guestName" | "guestMessage" | "guestImage" | "guestTag";

export const GuestInfoProvider = createContext<{
  guestForm: GuestForm;
  updateGuestForm: (name: string, value: string | number) => void;
}>({
  guestName: "",
  guestMessage: "",
  guestTag: "",
  guestImage: "",
} as GuestForm);

const CreateGuestbook = () => {
  const [currentMenu, setCurrentMenu] = useState(GuestbookCreateMenu.BASIC_INFO);

  const [guestForm, setGuestForm] = useState<GuestForm>({
    guestName: "",
    guestMessage: "",
    guestTag: "",
    guestImage: "",
  });

  const showBasicInfo = () => {
    setCurrentMenu(GuestbookCreateMenu.BASIC_INFO);
  };

  const showAdditionalInfo = () => {
    setCurrentMenu(GuestbookCreateMenu.ADDITIONAL_INFO);
  };

  const updateGuestForm = (name: string, value: string | number) => {
    setGuestForm({ ...guestForm, [name as GuestBookForm]: value });
  };

  console.log(guestForm);

  return (
    <Container
      variants={animationVariants}
      initial={"invisible"}
      animate={"visible"}
      exit={"invisible"}
    >
      <GuestInfoProvider.Provider
        value={{
          guestForm,
          updateGuestForm,
        }}
      >
        {currentMenu === GuestbookCreateMenu.BASIC_INFO ? (
          <BasicGuestInfo handleMenuChange={showAdditionalInfo} />
        ) : (
          <AdditionalGuestInfo handleMenuChange={showBasicInfo} />
        )}
      </GuestInfoProvider.Provider>
    </Container>
  );
};

const Container = styled(motion.section)`
  overflow: hidden;
`;

export default CreateGuestbook;
