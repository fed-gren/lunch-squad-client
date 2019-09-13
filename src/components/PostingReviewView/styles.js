import styled from "styled-components";
import { styles } from "../../../config";

const PostingRate = styled.section`
  background-color: #eee;
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: scroll;
  padding-bottom: ${styles.reviewBarHeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;

  & > p {
    margin: 1.5rem;
  }
`;

const Rates = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export default { PostingRate, Rates };
