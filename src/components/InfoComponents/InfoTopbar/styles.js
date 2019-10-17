import styled from 'styled-components';

const InfoTopbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  background-color: #f9f9f9;
  padding: 0 0.7rem;
  position: relative;
  z-index: 2;

  & > .controller {
    display: flex;
    align-items: center;
    color: #222;
  }
`;

const InfoLogin = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default { InfoTopbar, InfoLogin };
