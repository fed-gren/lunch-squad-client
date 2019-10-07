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

const ThumbnailTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 3rem;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(1, 1, 1, 0.3);
  color: #fff;
  font-size: 1.4rem;
`;

export default { Thumbnail, ThumbnailTitle };
