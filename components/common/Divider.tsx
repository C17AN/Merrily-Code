import styled from "@emotion/styled";
import { palette } from "styles/palette";

const Divider = styled.p`
  width: 100%;
  margin: 1rem 0;
  border-bottom: 1px solid ${palette.notion.common.divider};

  @media (max-width: 768px) {
    margin: 0.75rem 0;
  }
`;

export default Divider;
