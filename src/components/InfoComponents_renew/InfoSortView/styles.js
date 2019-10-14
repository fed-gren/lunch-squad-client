import styled from "styled-components";

const InfoSort = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: #f9f9f9;
  padding: 0 0.7rem;
  position: absolute;
  top: ${({showFlag}) => showFlag ? "3rem" : "0"};
  transition: top 0.5s;
  left: 0;
  z-index: 1;
`;

const InfoSortDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 100%;
  color: #888;
  & > p {
    font-size: 0.8rem;
  }
`;

export default { InfoSort, InfoSortDesc };
