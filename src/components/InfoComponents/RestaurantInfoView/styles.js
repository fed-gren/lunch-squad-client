import styled from "styled-components";

const RestaurantInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 0.4rem;
`;

const RestaurantTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

export default { RestaurantInfo, RestaurantTitle };
