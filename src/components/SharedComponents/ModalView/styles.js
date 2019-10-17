import styled from 'styled-components';

const ModalBackground = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Modal = styled.article`
  width: ${({ width }) => (width || '10rem')};
  border: 1px solid #fff;
  display: flex;
  box-shadow: 0 0.3rem 0.3rem #333;
`;

export default { ModalBackground, Modal };
