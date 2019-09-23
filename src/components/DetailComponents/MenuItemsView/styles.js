import styled from "styled-components";

const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;
  font-size: 1rem;
  padding: 0 0.5rem;

  & > p {
    margin: 0 0.4rem;
  }

  & > div {
    flex: 1;
    border-bottom: 1px dotted #aaa;
  }
`;

export default { MenuItem };
