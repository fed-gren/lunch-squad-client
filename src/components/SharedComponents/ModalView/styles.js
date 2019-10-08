import styled from "styled-components";

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
  width: ${({ width }) => (width ? width : "10rem")};
  height: ${({ height }) => (height ? height : "10rem")};
  border: 1px solid #fff;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
`;

export default { ModalBackground, Modal };
