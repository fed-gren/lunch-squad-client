import styled from "styled-components";
import { styles } from "../../../../config";

const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > p {
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;

    & > span {
      color: ${styles.filteredItemColor}
    }
  }

  & > h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }
`;

export default { DetailInfo };
