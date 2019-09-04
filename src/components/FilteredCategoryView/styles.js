import styled from "styled-components";
import { styles } from "../../../config";

const FilteredItem = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 3rem;
  background-color: rgba(1, 1, 1, 0.3);
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 1rem;

  & * {
    visibility: visible;
  }

  & > div {
    /* item */
    background-color: ${styles.filteredItemColor};
    color: #fff;
    width: 3rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.4rem;
    border-radius: 0.4rem;
  }
`;

export default { FilteredItem };
