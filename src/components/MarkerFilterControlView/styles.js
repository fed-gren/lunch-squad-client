import styled from "styled-components";
import { styles } from "../../../config";

const MarkerFilterContol = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 3rem;
  background-color: rgba(1, 1, 1, 0.3);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  & * {
    visibility: visible;
  }
`;

export default { MarkerFilterContol };
