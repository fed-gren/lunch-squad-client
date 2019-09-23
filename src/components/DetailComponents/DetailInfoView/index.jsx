import React, { useEffect } from "react";
import Styled from "./styles";
import { useFetch } from "../../../hooks";
import { data } from "../../../../config";
import { FaArrowLeft } from "react-icons/fa";
import { styles } from "../../../../config";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
import TopbarLayoutView from "../../SharedComponents/TopbarLayoutView";
import ButtonView from "../../SharedComponents/ButtonView";

export default function index({ id, goBack }) {
  const { loading, data: restaurantData } = useFetch({
    url: `${data.restaurantApiUrl}${id}`
  });
  //TODO: create Loading component
  return (
    !loading && (
      <Styled.DetailInfo>
        <TopbarLayoutView>
          <ButtonView
            name={<FaArrowLeft />}
            {...styles.backButton}
            onClick={goBack}
          />
        </TopbarLayoutView>
        <ThumbnailView imageUrl="http://cfd.tourtips.com/@cms_800/2015081384/gjexf1/%EB%B4%89%ED%94%BC%EC%96%91.JPG" />
      </Styled.DetailInfo>
    )
  );
}
