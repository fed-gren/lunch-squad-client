import styled from "styled-components";

const Topbar = styled.header`
  /* TODO: remove border */
  border: 1px dotted gray;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(1, 1, 1, 0.2);
  position: fixed;
  top: 0;
  padding: 0 0.6rem;
`;

export default { Topbar };
