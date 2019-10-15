import styled from "styled-components";

const ReviewItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  border-bottom: 1px solid #ccc;
  color: #444;

  & > p {
    display: flex;
    align-items: center;
    min-height: 2rem;
  }
`;

export default { ReviewItem };
