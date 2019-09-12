import React, { useEffect } from "react";
import Styled from "./styles";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function index({ rate, setRate }) {
  const rateHandler = point => {
    setRate(point);
  };
  useEffect(() => {
    console.log(`rate: ${rate}`);
  }, [rate]);

  return (
    <Styled.SetRate>
      <div
        onMouseEnter={() => rateHandler(1)}
        onMouseLeave={() => rateHandler(0)}
      >
        {rate >= 1 ? <FaStar /> : <FaRegStar />}
      </div>
      <div
        onMouseEnter={() => rateHandler(2)}
        onMouseLeave={() => rateHandler(0)}
      >
        {rate >= 2 ? <FaStar /> : <FaRegStar />}
      </div>
      <div
        onMouseEnter={() => rateHandler(3)}
        onMouseLeave={() => rateHandler(0)}
      >
        {rate >= 3 ? <FaStar /> : <FaRegStar />}
      </div>
      <div
        onMouseEnter={() => rateHandler(4)}
        onMouseLeave={() => rateHandler(0)}
      >
        {rate >= 4 ? <FaStar /> : <FaRegStar />}
      </div>
      <div
        onMouseEnter={() => rateHandler(5)}
        onMouseLeave={() => rateHandler(0)}
      >
        {rate >= 5 ? <FaStar /> : <FaRegStar />}
      </div>
    </Styled.SetRate>
  );
}
