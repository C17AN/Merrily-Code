import React from "react";
import styled from "@emotion/styled";
import userData from "data/user";
import { palette } from "styles/palette";
import Image from "next/image";

type Props = {};

const PostProfile = (props: Props) => {
  const { name, nickName, description, image } = userData.profile;
  const imageSource = image || "/images/avatar-blank.png";

  return (
    <Container>
      <CustomImage src={imageSource} width={64} height={64} />
      <ProfileDescription>
        <section className="profile-name">
          <p>{name}</p>
          {nickName && <p>({nickName})</p>}
        </section>
        <p className="profile-description">{description}</p>
      </ProfileDescription>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  width: 80%;
  margin: 0 auto;
  border: 1px solid ${palette.grey[100]};
  background-color: ${palette.grey[50] + "80"};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CustomImage = styled(Image)`
  border-radius: 1rem; ;
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;

  .profile-name {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 0.375rem;
    p {
      font-size: 1rem;
      font-weight: 700;
      display: inline-block;
    }
  }

  .profile-description {
    font-size: 0.875rem;
    color: ${palette.grey[500]};
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    .profile-name {
      display: flex;
      gap: 0.25rem;
      margin-bottom: 0.375rem;
      p {
        font-size: 0.875rem;
        font-weight: 700;
        display: inline-block;
      }
    }

    .profile-description {
      font-size: 0.75rem;
      color: ${palette.grey[500]};
      line-height: 1.2;
    }
  }
`;

export default PostProfile;
