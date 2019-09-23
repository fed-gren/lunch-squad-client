import React, { useContext, useEffect } from "react";
import Styled from "./styles";
import { useFetch } from "../../../hooks";
import { data, styles } from "../../../../config";
import { FaArrowLeft } from "react-icons/fa";
import { DetailContext } from "../../../contexts/DetailContext";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
import TopbarLayoutView from "../../SharedComponents/TopbarLayoutView";
import ButtonView from "../../SharedComponents/ButtonView";
import ContactInfoView from "../ContactInfoView";
import MenuListView from "../MenuListView";

export default function index({ id, goBack }) {
  const { detailState, setDetailState } = useContext(DetailContext);
  const { loading, data: restaurantData } = useFetch({
    url: `${data.restaurantApiUrl}${id}`
  });

  useEffect(() => {
    if (!restaurantData) return;
    setDetailState({
      ...restaurantData
    });
  }, [restaurantData]);

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
        <ThumbnailView
          imageUrl="http://cfd.tourtips.com/@cms_800/2015081384/gjexf1/%EB%B4%89%ED%94%BC%EC%96%91.JPG"
          title={detailState.name}
          height="300px"
        />
        <ContactInfoView />
        <MenuListView />
      </Styled.DetailInfo>
    )
  );
}
