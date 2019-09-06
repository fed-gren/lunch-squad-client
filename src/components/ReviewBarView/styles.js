import styled from "styled-components";
import { styles } from "../../../config";

const ReviewBar = styled.div`
  width: 100%;
  height: ${styles.reviewBarHeight};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #ddd;
  padding: 0 0.6rem;
  position: fixed;
  ${({ getReviewBarPosition, reviewOpenFlag }) =>
    getReviewBarPosition(reviewOpenFlag)};
  z-index: 1;
  -webkit-transition: bottom 0.5s ease;
  -moz-transition: bottom 0.5s ease;
  -ms-transition: bottom 0.5s ease;
  -o-transition: bottom 0.5s ease;
  transition: bottom 0.5s ease;
`;

export default { ReviewBar };
