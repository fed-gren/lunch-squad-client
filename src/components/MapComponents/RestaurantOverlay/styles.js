import styled from 'styled-components';
import { styles } from '../../../../config';

const RestaurantOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor || styles.themeColor)};
  color: #fff;
  padding: 0.3rem;
  border-radius: 0.4rem;
  box-shadow: 2px -2px ${({ shadowColor }) => (shadowColor || styles.themeShadowColor)};

  &:after {
    content: "";
    position: absolute;
    border-top: 10px solid
      ${({ bgColor }) => (bgColor || styles.themeColor)};
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    bottom: -9px;
    left: calc(50% - 5px);
  }
`;

export default { RestaurantOverlay };
