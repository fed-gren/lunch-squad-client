import React from "react";
import Styled from "./styles";
import ButtonView from "../../SharedComponents/ButtonView";
import { FaRandom } from "react-icons/fa";

const randomButtonStyles = {
  width: "6rem",
  height: "2.4rem",
  fontSize: "1rem",
  border: "1px solid #888",
  activeBgColor: "#888"
};

const RandomButtonText = _ => {
  return (
    <Styled.RandomButtonText>
      <FaRandom />
      <span>랜덤추천</span>
    </Styled.RandomButtonText>
  );
};

export default function index() {
  return (
    <Styled.RandomButton>
      <ButtonView
        name={<RandomButtonText />}
        onClick={() => console.log("random!")}
        {...randomButtonStyles}
      />
    </Styled.RandomButton>
  );
}
