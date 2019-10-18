import styled from 'styled-components';

const RestaurantOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  padding: 0.3rem;
  border-radius: 0.4rem;
  box-shadow: 2px -2px ${({ shadowColor }) => shadowColor};

  &:after {
    content: "";
    position: absolute;
    border-top: 10px solid
      ${({ bgColor }) => bgColor};
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    bottom: -9px;
    left: calc(50% - 5px);
  }
`;

export default { RestaurantOverlay };
