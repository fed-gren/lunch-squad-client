import React, { useCallback } from "react";
import Styled from "./styles";
import { styles } from "../../../../config";

import ButtonView from "../../SharedComponents/ButtonView";

export default function RadioButtonContainer() {
  const selectHandler = useCallback(({ target }) => {
    if (target.tagName !== "BUTTON") return;
    const container = target.parentElement;
    //target이 active라는 클래스명을 가지고 있는지 확인한다.
    if(target.classList.contains("active")) {
      target.classList.toggle("asc");
      target.classList.toggle("desc");
    }
    //있으면?
    //asc라는 클래스명이 있으면 desc로 바꿔주고 desc이면 asc로 바꿔준다.
    //없으면?
    else  {
      container.querySelector(".active").classList.remove("active");
      target.classList.add("active");
    }
    //active를 가지고 있는 버튼을 찾아서 지운 뒤 target에 active를 추가한다.
  }, []);

  return (
    <Styled.RadioButtonContainer
      onClick={selectHandler}
      {...{ radioButtonStyles }}
    >
      <ButtonView
        name="평점"
        className="active desc"
        {...sortButtonStyles}
      ></ButtonView>
      <ButtonView
        name="리뷰수"
        className="desc"
        {...sortButtonStyles}
        ></ButtonView>
      <ButtonView
        name="이름순"
        className="desc"
        {...sortButtonStyles}
      ></ButtonView>
    </Styled.RadioButtonContainer>
  )
}

const sortButtonStyles = {
  width: "auto",
  fontSize: "0.8rem",
  margin: "0 0.6rem",
  padding: "0 0.4rem"
};

const radioButtonStyles = {
  deactiveBorderColor: "#999",
  deactiveColor: "#999",
  activeBorderColor: styles.filteredItemColor,
  activeColor: styles.filteredItemColor
};