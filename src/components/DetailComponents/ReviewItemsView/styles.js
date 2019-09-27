import styled from "styled-components";

const ReviewItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border-bottom: 1px solid #ccc;
  color: #444;

  & > p {
    display: flex;
    padding: 1rem;
    align-items: center;
    min-height: 3rem;
  }
`;

export default { ReviewItem };
