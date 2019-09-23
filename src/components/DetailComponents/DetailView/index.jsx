import React from "react";
import InfoLayout from "../../InfoLayout";
import DetailInfoView from "../DetailInfoView";
import { DetailProvider } from "../../../contexts/DetailContext";

export default function index({ match, history }) {
  const { goBack } = history;
  return (
    <InfoLayout>
      <DetailProvider>
        <DetailInfoView id={match.params.id} {...{ goBack }} />
      </DetailProvider>
    </InfoLayout>
  );
}
