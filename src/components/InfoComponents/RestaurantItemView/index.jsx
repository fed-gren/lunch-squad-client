import React from "react";
import Styled from "./styles";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
import RestaurantInfoView from "../RestaurantInfoView";

export default function RestaurantItemView({ ...info }) {
  return (
    <Styled.RestaurantItem>
      {/* <ThumbnailView imageUrl="https://source.unsplash.com/random/200x200" /> */}
      <ThumbnailView imageUrl="http://cfd.tourtips.com/@cms_200/2015081384/gjexf1/%EB%B4%89%ED%94%BC%EC%96%91.JPG" />
      <RestaurantInfoView {...info} />
    </Styled.RestaurantItem>
  );
}
