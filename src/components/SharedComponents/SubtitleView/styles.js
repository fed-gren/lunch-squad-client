import styled from 'styled-components';
import { styles } from '../../../../config';

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;

  & > h3 {
    font-size: 1rem;
    font-weight: 600;
    display: inline-block;
    height: 1rem;
    margin-bottom: 0.6rem;

    &::after {
      content: "";
      display: inline-block;
      width: 100%;
      height: 0.4rem;
      border-radius: .2rem;
      background-color: ${styles.restaurantList.hoverColor};
      opacity: 0.6;
      position: relative;
      top: -0.7rem;
    }
  }


`;

export default { Subtitle };
