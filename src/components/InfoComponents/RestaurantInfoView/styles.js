import styled from "styled-components";
import { styles } from "../../../../config";

const RestaurantInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 0.4rem;
  color: #777;
  font-weight: 400;
`;

const RestaurantTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  height: 1.1rem;
  font-weight: 400;
  margin-bottom: 0.4rem;
  color: #222;

  & > h4::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: .4rem;
    background-color: ${styles.restaurantList.hoverColor};
    transition: opacity 0.2s;
    opacity: ${({hoverFlag}) => hoverFlag ? "0.7" : "0"};
    position: relative;
    top: -.7rem;
  }
`;

export default { RestaurantInfo, RestaurantTitle };
