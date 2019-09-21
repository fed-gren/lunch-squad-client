import styled from "styled-components";

const RestaurantItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid #999;
  cursor: pointer;
  background-color: ${({ hoverFlag }) => hoverFlag && "#999"};
`;

export default { RestaurantItem };
