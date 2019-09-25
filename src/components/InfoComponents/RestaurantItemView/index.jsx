import React, { useState } from "react";
import Styled from "./styles";
import { BrowserRouter as Router, Link } from "react-router-dom";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
import RestaurantInfoView from "../RestaurantInfoView";

export default function RestaurantItemView({ ...info }) {
  const [hoverFlag, setHoverFlag] = useState(false);
  const { id, thumnailImageURL, ...restInfo } = info;
  const linkPath = `/${id}`;

  return (
    <Styled.RestaurantItem
      onMouseEnter={() => setHoverFlag(true)}
      onMouseLeave={() => setHoverFlag(false)}
      {...{ hoverFlag }}
    >
      <Link to={linkPath}>
        <ThumbnailView width="7rem" imageUrl={thumnailImageURL} />
        <RestaurantInfoView {...restInfo} />
      </Link>
    </Styled.RestaurantItem>
  );
}
