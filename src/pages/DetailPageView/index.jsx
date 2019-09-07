import React from "react";
import Styled from "./styles";
import { FaArrowLeft } from "react-icons/fa";
//components
import ButtonView from "../../components/ButtonView";
import TopbarLayoutView from "../../components/TopbarLayoutView";
import DetailInfoView from "../../components/DetailInfoView";

export default ({ match, history }) => {
  // console.log(match.params.id);

  const homeButtonStyles = {
    bgColor: "transparent",
    color: "#fff",
    width: "2rem",
    height: "2rem",
    borderRadius: "1rem",
    fontSize: "1.2rem"
  };

  return (
    <Styled.DetailPage>
      <TopbarLayoutView>
        <ButtonView
          name={<FaArrowLeft />}
          {...homeButtonStyles}
          onClick={history.goBack}
        />
      </TopbarLayoutView>
      <DetailInfoView />
    </Styled.DetailPage>
  );
};
