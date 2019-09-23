import styled from "styled-components";

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  height: 5rem;

  & > p {
    font-size: 1.2rem;
    margin: 0.2rem 0;
  }
`;

export default { ContactInfo };
