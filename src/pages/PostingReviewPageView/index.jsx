import React from "react";
import Styled from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { styles } from "../../../config";
//components
import ButtonView from "../../components/SharedComponents/ButtonView";
import TopbarLayoutView from "../../components/SharedComponents/TopbarLayoutView";
import PostingReviewView from "../../components/PostingReviewPageComponents/PostingReviewView";

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
      <PostingReviewView />
    </Styled.PostingReviewPage>
  );
};
