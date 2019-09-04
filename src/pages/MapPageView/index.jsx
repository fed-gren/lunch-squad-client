import React from "react";
import Styled from "./styles";
import { FaHome, FaList, FaMapMarkedAlt } from "react-icons/fa";
//components
import LinkButtonView from "../../components/LinkButtonView";
import TopbarLayoutView from "../../components/TopbarLayoutView";
import SwitchView from "../../components/SwitchView";
import NaverMapView from "../../components/NaverMapView";
import MarkerFilterView from "../../components/MarkerFilterView";
import InfoView from "../../components/InfoView";

export default _ => {
  const homeButtonStyles = {
    bgColor: "transparent",
    color: "#000",
    width: "2rem",
    height: "2rem",
    borderRadius: "1rem",
    fontSize: "1.2rem"
  };

  return (
    <Styled.MapPage>
      <TopbarLayoutView>
        <LinkButtonView to="/" name={<FaHome />} {...homeButtonStyles} />
        <SwitchView onMessage={<FaList />} offMessage={<FaMapMarkedAlt />} />
      </TopbarLayoutView>
      <NaverMapView />
      {/* <MarkerFilterView /> */}
      <InfoView />
    </Styled.MapPage>
  );
};
