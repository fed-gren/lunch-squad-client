import React from "react";
import Styled from "./styles";
import { MdStar, MdStarBorder } from "react-icons/md";

export default function index({ rate, setRate }) {
  const rateHandler = point => {
    setRate(point);
  };

  return (
    <Styled.SetRate>
      <div
        onMouseEnter={() => rateHandler(1)}
        onMouseLeave={() => rateHandler(0)}
      >
        {rate >= 1 ? <MdStar /> : <MdStarBorder />}
      </div>
      <div
        onMouseEnter={() => rateHandler(2)}
        onMouseLeave={() => rateHandler(0)}
      >
        {rate >= 2 ? <MdStar /> : <MdStarBorder />}
      </div>
      <div
        onMouseEnter={() => rateHandler(3)}
        onMouseLeave={() => rateHandler(0)}
      >
        {rate >= 3 ? <MdStar /> : <MdStarBorder />}
      </div>
      <div
        onMouseEnter={() => rateHandler(4)}
        onMouseLeave={() => rateHandler(0)}
      >
        {rate >= 4 ? <MdStar /> : <MdStarBorder />}
      </div>
      <div
        onMouseEnter={() => rateHandler(5)}
        onMouseLeave={() => rateHandler(0)}
      >
        {rate >= 5 ? <MdStar /> : <MdStarBorder />}
      </div>
    </Styled.SetRate>
  );
}
