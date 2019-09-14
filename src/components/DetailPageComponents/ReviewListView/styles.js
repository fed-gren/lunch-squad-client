import styled from "styled-components";
import { styles } from "../../../../config";

const Reviews = styled.section`
  flex: 1;
  background-color: #fff;
  width: 100%;
  position: absolute;
  overflow: scroll;
  top: ${styles.reviewBarHeight};
  left: 0;
`;

export default {
  Reviews
};
