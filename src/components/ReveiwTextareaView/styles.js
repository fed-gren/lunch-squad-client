import styled from "styled-components";
import { styles } from "../../../config";

const ReviewTextarea = styled.section`
  width: 100%;
  height: 17.5rem;
  margin-bottom: 1rem;

  & > textarea {
    width: 100%;
    height: 100%;
    resize: none;
    font-size: 1.1rem;
    outline: none;
  }
`;

export default { ReviewTextarea };
