import React, { useState, useCallback, useContext } from "react";
import Styled from "./styles";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
import RestaurantInfoView from "../RestaurantInfoView";

export default function RestaurantItemView({ ...info }) {
  const [hoverFlag, setHoverFlag] = useState(false);
  const { id, thumnailImageURL, ...restInfo } = info;
  const linkPath = `/${id}`;

  const { setHoveredRestaurant } = useContext(RestaurantContext);

  const mouseEnterHandler = useCallback(info => {
    setHoveredRestaurant(info);
    setHoverFlag(true);
  }, []);

  const mouseLeaveHandler = useCallback(_ => {
    setHoveredRestaurant(null);
    setHoverFlag(false);
  }, []);

  return (
    <Styled.RestaurantItem
      onMouseEnter={() => mouseEnterHandler(info)}
      onMouseLeave={() => mouseLeaveHandler()}
      {...{ hoverFlag }}
    >
      <Link to={linkPath}>
        <ThumbnailView
          width="7rem"
          imageUrl={thumnailImageURL}
          padding="0.5rem"
        />
        <RestaurantInfoView {...restInfo} />
      </Link>
    </Styled.RestaurantItem>
  );
}
