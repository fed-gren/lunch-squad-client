import styled from "styled-components";

const Thumbnail = styled.div`
  width: ${({ width }) => (width ? width : "100%")};

  & > picture {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    & > img {
      width: 100%;
      height: auto;
    }
  }
`;

export default { Thumbnail };
