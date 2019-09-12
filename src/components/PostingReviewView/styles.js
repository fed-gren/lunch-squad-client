import styled from "styled-components";
import { styles } from "../../../config";

const PostingReview = styled.section`
  background-color: #eee;
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: scroll;
  padding-bottom: ${styles.reviewBarHeight};
`;

const Rates = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export default { PostingReview, Rates };
