import styled from "styled-components";
import { styles } from "../../../config";

const Info = styled.section`
  flex: 1;
  background-color: rgba(1, 1, 1, 0.8);
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: scroll;
`;

const InfoItem = styled.li`
  height: 6rem;
  border: 1px solid white;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: #555;
  border-radius: 0.8rem;
  margin: 0.4rem;
  background-color: #ddd;
`;

const LikePart = styled.div`
  width: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${styles.themeColor};
  & > .like {
    font-size: 1rem;
    padding: 0.2rem 0;
  }
`;

const DescPart = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DescTextPart = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1rem;
  }
`;

export default {
  Info,
  InfoItem,
  LikePart,
  DescPart,
  DescTextPart
};
