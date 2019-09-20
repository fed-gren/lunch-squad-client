import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  border: 1px dotted gray;
  display: flex;

  &,
  & * {
    box-sizing: border-box;
  }
`;

export default { Layout };
