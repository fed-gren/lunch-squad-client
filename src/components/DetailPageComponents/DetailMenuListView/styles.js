import styled from "styled-components";

const DetailMenuList = styled.div`
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
