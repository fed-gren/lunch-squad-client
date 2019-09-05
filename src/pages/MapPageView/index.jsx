import React, { useContext } from "react";
import Styled from "./styles";
import { FaHome, FaList, FaMapMarkedAlt } from "react-icons/fa";
import { MapPageContext } from "../../contexts/MapPageContext";
//components
import LinkButtonView from "../../components/LinkButtonView";
import TopbarLayoutView from "../../components/TopbarLayoutView";
import SwitchView from "../../components/SwitchView";
import NaverMapView from "../../components/NaverMapView";
import MarkerFilterView from "../../components/MarkerFilterView";
import InfoView from "../../components/InfoView";

export default _ => {
  const { listShowFlag, setListShowFlag } = useContext(MapPageContext);

  const homeButtonStyles = {
    bgColor: "transparent",
    color: "#000",
    width: "2rem",
    height: "2rem",
    borderRadius: "1rem",
    fontSize: "1.2rem"
  };

  const toggleListView = _ => setListShowFlag(!listShowFlag);

  return (
    <Styled.MapPage>
      <TopbarLayoutView>
        <LinkButtonView to="/" name={<FaHome />} {...homeButtonStyles} />
        <SwitchView
          onMessage={<FaList />}
          offMessage={<FaMapMarkedAlt />}
          changeFunc={toggleListView}
        />
      </TopbarLayoutView>
      <NaverMapView />
      {listShowFlag ? <InfoView /> : <MarkerFilterView />}
    </Styled.MapPage>
  );
};
