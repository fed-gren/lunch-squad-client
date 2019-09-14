import React from "react";
import Styled from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { styles } from "../../../config";
//components
import ButtonView from "../../components/SharedComponents/ButtonView";
import TopbarLayoutView from "../../components/SharedComponents/TopbarLayoutView";
import DetailInfoView from "../../components/DetailPageComponents/DetailInfoView";

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
