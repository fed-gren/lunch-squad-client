import styled from "styled-components";

const DetailMenuList = styled.div`
  border: 1px dotted #123;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: #555;

  & li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    margin-bottom: 0.4rem;
  }
`;

export default { DetailMenuList };
