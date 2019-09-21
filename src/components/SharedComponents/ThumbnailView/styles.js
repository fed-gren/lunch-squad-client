import styled from "styled-components";

const Thumbnail = styled.picture`
  width: 7rem;
  height: 100%;
  display: flex;
  align-items: center;

  & > img {
    width: 100%;
    height: auto;
  }
`;

export default { Thumbnail };
