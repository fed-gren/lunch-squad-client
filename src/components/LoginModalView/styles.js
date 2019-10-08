import styled from "styled-components";
import { styles } from "../../../config";

const LoginModal = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LoginModalTitle = styled.div`
  width: 100%;
  height: 2rem;
  font-size: 0.9rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: #555;
  border-bottom: 1px solid #777;
`;

const LoginModalContents = styled.div`
  width: 100%;
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  & > .inputs {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    & > div {
      width: 100%;
      height: 2.4rem;
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      & > p {
        color: #555;
        width: 5rem;
      }

      & > input {
        flex: 1;
        height: 100%;
        font-size: 0.9rem;
        outline: none;
        border: 2px solid #888;
        border-radius: 0.2rem;
        transition: border-color 0.3s, background-color 0.3s;

        &:focus {
          border-color: ${styles.filteredItemColor};
          background-color: #fff;
        }
      }
    }
  }

  & > .buttons {
    height: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export default { LoginModal, LoginModalTitle, LoginModalContents };
