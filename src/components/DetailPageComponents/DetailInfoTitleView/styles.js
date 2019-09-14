import styled from "styled-components";

const DetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  & > h2 {
    color: #777;
  }
`;

export default { DetailTitle };
