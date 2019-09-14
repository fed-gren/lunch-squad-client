import styled from "styled-components";

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
`;

export default { FilteredItem };
