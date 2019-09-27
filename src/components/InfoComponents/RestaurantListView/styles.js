import styled from "styled-components";
import { styles } from "../../../../config";

const RestaurantList = styled.ul`
  /* background-color: ${styles.restaurantList.bgColor}; */
  background-color: "#fff";
  & > li {
    height: 7rem;
  }
  padding: 0.5rem 0;
`;

export default { RestaurantList };
