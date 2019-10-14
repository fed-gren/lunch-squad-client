import styled from "styled-components";

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  align-self: stretch;
  margin-left: 0.5rem;

  & > h3 {
    font-size: 1.1rem;
    color: #444;
    margin: 0.2rem 0 0.5rem 0;
  }

  & > p {
    font-size: 1rem;
    color: #444;
    margin: 0.2rem 0;
  }
`;

export default { ContactInfo };
