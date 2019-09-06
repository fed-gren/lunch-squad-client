import styled from "styled-components";
import { styles } from "../../../config";

const Reviews = styled.section`
  flex: 1;
  background-color: #fff;
  width: 100%;
  position: absolute;
  overflow: scroll;
  top: ${styles.reviewBarHeight};
  left: 0;
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
  Reviews
};
