import styled from "@emotion/styled";
import NextImage from "next/image";
import { palette } from "styles/palette";

type Image = {
  src: string;
  alt: string;
  title: string;
};

const Image = ({ src, alt, title }: Image) => {
  return (
    <Container>
      <NextImage
        src={src}
        layout="fill"
        sizes="120vw"
        alt={alt}
        title={title}
        placeholder="blur"
        blurDataURL="https://mui.com/static/ads-in-house/figma.png"
        quality={75}
      />
      {title?.length && <figcaption>{title}</figcaption>}
    </Container>
  );
};

const Container = styled.figure`
  width: 100%;
  margin: 1.5rem 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    position: unset !important;
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  > figcaption {
    color: ${palette.grey[400]};
  }
`;

export default Image;
