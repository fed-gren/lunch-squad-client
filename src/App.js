import React, { Component } from "react";
import styled from "styled-components";

const MyStartApp = styled.div`
  width: 50%;
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyStartApp>
        <h1>Hello!!</h1>
      </MyStartApp>
    );
  }
}

export default App;
