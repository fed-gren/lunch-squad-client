import React, { useState } from "react";
import Styled from "./styles";
import { BrowserRouter as Router, Link } from "react-router-dom";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
import RestaurantInfoView from "../RestaurantInfoView";

export default function RestaurantItemView({ ...info }) {
  const [hoverFlag, setHoverFlag] = useState(false);
  const { _id, ...restInfo } = info;
  const linkPath = `/${_id}`;

  return (
    <Styled.RestaurantItem
      onMouseEnter={() => setHoverFlag(true)}
      onMouseLeave={() => setHoverFlag(false)}
      {...{ hoverFlag }}
    >
      <Link to={linkPath}>
        <ThumbnailView imageUrl="http://cfd.tourtips.com/@cms_200/2015081384/gjexf1/%EB%B4%89%ED%94%BC%EC%96%91.JPG" />
        <RestaurantInfoView {...restInfo} />
      </Link>
    </Styled.RestaurantItem>
  );
}
