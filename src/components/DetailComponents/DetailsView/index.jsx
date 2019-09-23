import React from "react";
import InfoLayout from "../../InfoLayout";
import DetailInfoView from "../DetailInfoView";

export default function index({ match, history }) {
  const { goBack } = history;
  return (
    <InfoLayout>
      <DetailInfoView id={match.params.id} {...{ goBack }} />
    </InfoLayout>
  );
}
