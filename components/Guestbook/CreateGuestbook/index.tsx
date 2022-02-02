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

type GuestBookForm =
  | "guestName"
  | "guestMessage"
  | "guestImage"
  | "guestTag"
  | "guestAddress"
  | "guestColor";

export const GuestFormProvider = createContext<any>(null);

const CreateGuestbook = () => {
  const [currentMenu, setCurrentMenu] = useState(GuestbookCreateMenu.BASIC_INFO);

  const [guestForm, setGuestForm] = useState<GuestForm>({
    guestName: "",
    guestMessage: "",
    guestTag: "",
    guestImage: "/images/avatar-blank.png",
    guestAddress: "",
    guestColor: "",
  });

  const showBasicInfo = () => {
    setCurrentMenu(GuestbookCreateMenu.BASIC_INFO);
  };

  const showAdditionalInfo = () => {
    setCurrentMenu(GuestbookCreateMenu.ADDITIONAL_INFO);
  };

  // TODO: useReducer를 결합한 형태로 리팩터링 할것.
  // "name" 속성을 갖지 않는 요소 (li 등) 가 있으므로, 이 방법은 동일한 핸들러를 재활용할 수 없다는 문제가 있음
  // 또한 guestForm, updateGuestForm에 대한 타입 지원을 받기 어렵다는 문제가 있음
  const updateGuestForm = (name: string, value: string | number) => {
    setGuestForm({ ...guestForm, [name as GuestBookForm]: value });
  };

  return (
    <Container
      variants={animationVariants}
      initial={"invisible"}
      animate={"visible"}
      exit={"invisible"}
    >
      <GuestFormProvider.Provider
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
      </GuestFormProvider.Provider>
    </Container>
  );
};

const Container = styled(motion.section)`
  overflow: hidden;
`;

export default CreateGuestbook;
