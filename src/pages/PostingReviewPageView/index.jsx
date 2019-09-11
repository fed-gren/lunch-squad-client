import React from "react";
import Styled from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { styles } from "../../../config";
//components
import ButtonView from "../../components/ButtonView";
import TopbarLayoutView from "../../components/TopbarLayoutView";
import PostingReivewView from "../../components/PostingReviewView";

export default ({ match, history }) => {
  // console.log(match.params.id);
  return (
    <Styled.PostingReviewPage>
      <TopbarLayoutView>
        <ButtonView
          name={<FaArrowLeft />}
          {...styles.backButton}
          onClick={history.goBack}
        />
      </TopbarLayoutView>
      <PostingReivewView />
    </Styled.PostingReviewPage>
  );
};
