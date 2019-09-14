import styled from "styled-components";
import { styles } from "../../../../config";

const DetailInfo = styled.section`
  background-color: #eee;
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: scroll;
  padding-bottom: ${styles.reviewBarHeight};
`;

export default { DetailInfo };
