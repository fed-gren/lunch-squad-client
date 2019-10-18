import styled from 'styled-components';

const RandomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
`;

const RandomButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    font-size: 0.8rem;
    margin: 0 0 0 0.2rem;
  }
`;

export default { RandomButton, RandomButtonText };
