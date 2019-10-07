import styled from "styled-components";

const InfoFilter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: #f9f9f9;
  padding: 0 0.7rem;
  position: absolute;
  top: ${({ showFlag, sortShowFlag }) => showFlag ? sortShowFlag ? "6rem" : "3rem" : sortShowFlag ? "3rem" : "0"};
  transition: top 0.5s;
  left: 0;
  z-index: 0;
`;

export default { InfoFilter };
