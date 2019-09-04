import { hot } from "react-hot-loader/root";
import React from "react";
import styled from "styled-components";

const MyStartApp = styled.div`
  width: 50%;
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default hot(() => {
  return (
    <MyStartApp>
      <h1>Hello!!</h1>
    </MyStartApp>
  );
});
