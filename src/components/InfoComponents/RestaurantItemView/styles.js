import styled from "styled-components";
import { styles } from "../../../../config";

const RestaurantItem = styled.li`
  border-radius: 0.2rem;
  background-color: ${({ hoverFlag }) =>
    hoverFlag
      ? styles.restaurantList.hoverColor
      : styles.restaurantList.itemColor};

  transition: background-color 0.2s;
  & > a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
  }

  & > a:visited {
    text-decoration: none;
    color: black;
  }
`;

export default { RestaurantItem };
