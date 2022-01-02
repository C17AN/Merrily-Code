import React from "react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

const Footer = () => {
  const navigateToProfile = () => {};

  return (
    <Container>
      <p>
        즐겁게, 코드 / Built By{" "}
        <a
          href="https://github.com/C17AN"
          target="_blank"
          rel="noreferrer"
          className="profile-link"
        >
          @C17AN
        </a>
        , 2021
      </p>
    </Container>
  );
};

const Container = styled.footer`
  margin-top: auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  font-size: 0.75rem;
  color: ${palette.grey[300]};

  .profile-link:hover {
    text-decoration: underline;
  }
`;

export default Footer;
