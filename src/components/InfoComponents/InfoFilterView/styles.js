import styled from 'styled-components';

const getTopValue = ({ showFlag, sortShowFlag }) => {
  let topVal = '0';
  if (showFlag) {
    topVal = sortShowFlag ? '6rem' : '3rem';
  } else {
    topVal = sortShowFlag ? '3rem' : '0';
  }
  return topVal;
};

const InfoFilter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: #f9f9f9;
  padding: 0 0.7rem;
  position: absolute;
  top: ${getTopValue};
  transition: top 0.5s;
  left: 0;
  z-index: 0;
`;

const InfoFilterDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 100%;
  color: #888;
  & > p {
    font-size: 0.8rem;
  }
`;

const InfoFilterButtons = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.7rem;
  font-weight: 700;
  & > button {
    margin: 0 0.6rem;
    transition: color 0.5s, border-color 0.5s;
  }
`;

export default { InfoFilter, InfoFilterDesc, InfoFilterButtons };
