import styled from 'styled-components';

const DetailView = styled.div`
  background-color: #f9f9f9;
  height: 36rem;
  width: 100%;
  overflow: scroll;
  position: absolute;
  visibility: ${({ foldFlag }) => (foldFlag ? 'hidden' : 'visible')};
  opacity: ${({ foldFlag }) => (foldFlag ? 0 : 1)};
  transition: visibility 0.3s, opacity 0.3s;
  top: 100%;
  left: 0;
`;

export default { DetailView };
