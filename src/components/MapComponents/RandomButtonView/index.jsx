import React, { useContext, useEffect, useCallback } from "react";
import Styled from "./styles";
import LinkButtonView from "../../SharedComponents/LinkButtonView";
import { FaRandom } from "react-icons/fa";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

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
      <span>랜덤식당</span>
    </Styled.RandomButtonText>
  );
};

export default function index() {
  const { filteredRestaurants } = useContext(RestaurantContext);

  const getRandomNum = useCallback(
    maxLen => Math.floor(Math.random() * maxLen),
    []
  );

  const genRandomPath = useCallback(
    _ => {
      if (!filteredRestaurants) return "/";
      const maxLen = filteredRestaurants.length;
      let randomIdx = getRandomNum(maxLen);
      let randomPath = `/${filteredRestaurants[randomIdx].id}`;

      while (randomPath === location.pathname) {
        randomIdx = getRandomNum(maxLen);
        randomPath = `/${filteredRestaurants[randomIdx].id}`;
      }

      return randomPath;
    },
    [filteredRestaurants]
  );

  return (
    <Styled.RandomButton>
      <LinkButtonView
        name={<RandomButtonText />}
        to={genRandomPath()}
        {...randomButtonStyles}
      />
    </Styled.RandomButton>
  );
}
