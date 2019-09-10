import React from "react";
import Styled from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { styles } from "../../../config";
//components
import ButtonView from "../../components/ButtonView";
import TopbarLayoutView from "../../components/TopbarLayoutView";
import DetailInfoView from "../../components/DetailInfoView";

export default ({ match, history }) => {
  // console.log(match.params.id);
  return (
    <Styled.DetailPage>
      <TopbarLayoutView>
        <ButtonView
          name={<FaArrowLeft />}
          {...styles.backButton}
          onClick={history.goBack}
        />
      </TopbarLayoutView>
      <DetailInfoView />
    </Styled.DetailPage>
  );
};
