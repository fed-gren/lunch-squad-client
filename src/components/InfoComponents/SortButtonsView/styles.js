import styled from "styled-components";

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.7rem;
  font-weight: 700;

    & > button {
    border: 1px solid;
    border-color: ${({ radioButtonStyles }) =>
    radioButtonStyles && radioButtonStyles.deactiveBorderColor};
    color: ${({ radioButtonStyles }) =>
    radioButtonStyles && radioButtonStyles.deactiveColor}
  }

  & > button.active {
    border-color: ${({ radioButtonStyles }) =>
    radioButtonStyles && radioButtonStyles.activeBorderColor};
    color: ${({ radioButtonStyles }) =>
    radioButtonStyles && radioButtonStyles.activeColor}
  }

  & > button::after {
    content: "";
    width: 0;
    height: 0;
    vertical-align: middle;
    margin-left: 0.2rem;
  }

  & > button.asc::after {
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-bottom: 0.5rem solid;
    border-radius: 50% 20% 20% 20%;
  }

  & > button.desc::after {
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-top: 0.5rem solid;
    border-radius: 20% 20% 50% 20%;
  }
`;

export default { RadioButtonContainer };
