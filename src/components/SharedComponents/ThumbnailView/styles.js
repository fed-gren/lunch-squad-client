import styled from 'styled-components';

const Thumbnail = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding && padding};
  border-radius: ${({ circle }) => (circle ? '50%' : 'none')};
  position: relative;

  & > picture {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    & > img {
      border-radius: ${({ circle }) => (circle ? '50%' : 'none')};
      width: 100%;
      height: 100%;
    }
  }
`;

export default { Thumbnail };
