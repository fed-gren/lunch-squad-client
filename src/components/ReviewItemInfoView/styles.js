import styled from "styled-components";

const ReviewItemInfo = styled.div`
  width: 12rem;
  font-size: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px dotted red;

  & > .regDate {
    font-size: 0.7rem;
  }
`;

export default {
  ReviewItemInfo
};
