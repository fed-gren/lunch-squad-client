import React from "react";
import Styled from "./styles";
import { metadata, styles } from "../../../config";
import { GiFoodTruck } from "react-icons/gi";
//components
import LinkButtonView from "../../components/LinkButtonView";

export default _ => {
  const startButtonStyles = {
    bgColor: styles.themeColor,
    color: "#fff",
    width: "9rem",
    height: "2rem",
    borderRadius: "0.7rem",
    fontSize: "1rem"
  };
  return (
    <Styled.LandingPage>
      <Styled.LandingLogo>
        <GiFoodTruck />
      </Styled.LandingLogo>
      <Styled.LandingTitle>{metadata.title}</Styled.LandingTitle>
      <Styled.StartButton>
        <LinkButtonView to="/map" name="Start" {...startButtonStyles} />
      </Styled.StartButton>
    </Styled.LandingPage>
  );
};
