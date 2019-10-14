import styled from "styled-components";

const Thumbnail = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "auto")};
  padding: ${({ padding }) => padding && padding};
  border-radius: ${({ circle }) => circle ? "50%" : "none"};
  position: relative;

  & > picture {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    & > img {
      border-radius: ${({ circle }) => circle ? "50%" : "none"};
      width: 100%;
      height: auto;
    }
  }
`;

export default { Thumbnail };
