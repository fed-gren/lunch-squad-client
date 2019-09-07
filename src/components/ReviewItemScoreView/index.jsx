import React from "react";
import Styled from "./styles";
import { FaRegGrinTongueSquint, FaRegMoneyBillAlt } from "react-icons/fa";

export default function index({ tasteScore, priceScore }) {
  return (
    <Styled.ReviewItemScore>
      <div className="tasteScore">
        {/* <span>
          <FaRegGrinTongueSquint />
        </span> */}
        <span>맛:{tasteScore}점</span>
      </div>
      <div className="priceScore">
        {/* <span>
          <FaRegMoneyBillAlt />
        </span> */}
        <span>가격:{priceScore}점</span>
      </div>
    </Styled.ReviewItemScore>
  );
}
