import styled from "styled-components";
import { styles } from "../../../config";

const ReviewItem = styled.li`
  height: 6rem;
  border: 1px solid white;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: #555;
  border-radius: 0.8rem;
  background-color: #ddd;
`;

// const DescPart = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
// `;

// const DescTextPart = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: space-between;

//   & > div {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-end;
//     font-size: 1rem;
//   }
// `;

export default {
  ReviewItem
};
