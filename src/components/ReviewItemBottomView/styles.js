import styled from "styled-components";

const ReviewItemBottom = styled.div`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #555;

  & > .reviewPart {
    min-height: 2.4rem;
    display: flex;
    padding: 0.2rem 0;

    & > p {
      font-size: 0.9rem;
      line-height: 1rem;

      &.folded {
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow-wrap: break-word;
        overflow: hidden;
        text-size-adjust: 100%;
        text-size-adjust: 100%;
        max-height: 2rem;
      }
    }
  }
  & > .buttonPart {
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export default {
  ReviewItemBottom
};
