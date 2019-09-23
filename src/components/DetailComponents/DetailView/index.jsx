import React from "react";
import InfoLayout from "../../InfoLayout";
import { DetailProvider } from "../../../contexts/DetailContext";
import DetailInfoView from "../DetailInfoView";
import ReviewContainerView from "../ReviewContainerView";

export default function index({ match, history }) {
  const { goBack } = history;
  return (
    <InfoLayout>
      <DetailProvider>
        <DetailInfoView id={match.params.id} {...{ goBack }} />
      </DetailProvider>
      <ReviewContainerView />
    </InfoLayout>
  );
}
