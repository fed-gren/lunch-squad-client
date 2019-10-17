import styled from "styled-components";

const DetailView = styled.div`
  background-color: #f9f9f9;
  height: 36rem;
  width: 100%;
  overflow: scroll;
  position: absolute;
  top: 100%;
  /* TODO: 리스트 접기, 펼치기 기능 추가 시 top 조절*/
  /* top: calc(-36rem + 100%); */
  left: 0;
`;

export default { DetailView };
