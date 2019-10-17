import styled from "styled-components";
import { styles } from "../../../../config";

const LoginModalTitle = styled.div`
  width: 100%;
  height: 2rem;
  font-size: 0.9rem;
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
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  & > .inputs {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 1rem 0;

    & > div {
      width: 100%;
      margin: 0.5rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      & > label {
        font-size: 0.7rem;
        margin-bottom: 0.2rem;
      }

      & > input {
        flex: 1;
        line-height: 2rem;
        font-size: 1rem;
        padding: 0 .4rem;
        outline: none;
        border: 1px solid #000;
        border-radius: 0.4rem;
        transition: border-color 0.3s, background-color 0.3s;

        &:focus {
          border-color: ${styles.filteredItemColor};
          background-color: #fff;
        }
      }
    }
  }

  & > .buttons {
    margin: 1rem 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & button {
      font-size: 0.9rem;
      font-weight: 400;
      margin-left: 0.7rem;
    }
  }
`;

export default { LoginModalTitle, LoginModalContents };
