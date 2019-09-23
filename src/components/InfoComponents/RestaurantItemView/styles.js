import styled from "styled-components";

const RestaurantItem = styled.li`
  & > a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #999;
    background-color: ${({ hoverFlag }) => hoverFlag && "#999"};
    text-decoration: none;
    color: black;
  }

  & > a:visited {
    text-decoration: none;
    color: black;
  }
`;

export default { RestaurantItem };
