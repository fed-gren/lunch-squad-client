import React from "react";
import Styled from "./styles";
import { MdStar, MdStarBorder } from "react-icons/md";

export default function index({
  rate,
  setRate,
  selectedRate,
  setSelectedRate,
  tempRate,
  setTempRate
}) {
  const enterHandler = _ => {
    setTempRate(selectedRate);
    setSelectedRate(null);
  };

  const leaveHandler = _ => {
    setSelectedRate(tempRate);
  };

  const starEnterHandler = point => {
    setRate(point);
  };

  const starLeaveHandler = _ => {
    setRate(null);
  };

  const clickHandler = point => {
    setSelectedRate(point);
    setTempRate(point);
  };
  const rateList = [1, 2, 3, 4, 5];

  return (
    <Styled.SetRate
      onMouseEnter={() => enterHandler()}
      onMouseLeave={() => leaveHandler()}
    >
      {rateList.map(eachRate => {
        return (
          <div
            key={eachRate}
            onMouseEnter={() => starEnterHandler(eachRate)}
            onMouseLeave={() => starLeaveHandler()}
            onClick={() => clickHandler(eachRate)}
          >
            {selectedRate >= eachRate ? (
              <MdStar />
            ) : rate >= eachRate ? (
              <MdStar />
            ) : (
              <MdStarBorder />
            )}
          </div>
        );
      })}
    </Styled.SetRate>
  );
}
