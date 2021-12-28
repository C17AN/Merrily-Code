import styled from "@emotion/styled";
import NextImage from "next/image";
import { palette } from "styles/palette";

type Image = {
  src: string;
  alt: string;
  title: string;
};

const Image = ({ src, alt, title: size }: Image) => {
  console.log(src, alt, size);
  return (
    <Container width={size}>
      <NextImage
        src={src}
        layout="fill"
        alt={alt}
        title={alt}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Ug8AAk0BZU1+kw8AAAAASUVORK5CYII="
        quality={75}
      />
      {alt?.length && <figcaption>{alt}</figcaption>}
    </Container>
  );
};

const Container = styled.figure<{ width: string }>`
  width: 100%;
  margin: 1.5rem 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    width: ${({ width = "100%" }) => width} !important;
    max-width: 100%;
    display: block;
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
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;

export default Image;
