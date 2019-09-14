import React from "react";
import Styled from "./styles";
//component
import DetailInfoImageView from "../DetailInfoImageView";
import DetailInfoTitleView from "../DetailInfoTitleView";
import DetailMenuListView from "../DetailMenuListView";
import ReviewBarView from "../ReviewBarView";

export default function index() {
  return (
    <Styled.DetailInfo>
      <DetailInfoImageView />
      <DetailInfoTitleView />
      <DetailMenuListView />
      <ReviewBarView />
    </Styled.DetailInfo>
  );
}
