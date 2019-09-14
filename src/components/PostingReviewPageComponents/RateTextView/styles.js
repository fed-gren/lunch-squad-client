import styled from "styled-components";
import { styles } from "../../../../config";

const RateText = styled.div`
  margin-left: 0.8rem;
  & > span {
    display: inline-block;
    width: 2rem;
    color: #777;

    &.selected {
      color: ${styles.filteredItemColor};
    }
  }
`;

export default { RateText };
