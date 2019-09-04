import React from "react";
import Styled from "./styles";
import { data } from "../../../config";
import { FaRegThumbsUp } from "react-icons/fa";

export default function index() {
  return (
    <Styled.Info>
      <ul>
        {data.dummyList.map(item => (
          <Styled.InfoItem key={item.id}>
            <Styled.LikePart>
              <FaRegThumbsUp />
              <p className="like">{item.like}</p>
            </Styled.LikePart>
            <Styled.DescPart>
              <h3>{item.name}</h3>
              <div>
                <span>추천메뉴:{item.recommendedMenu}</span>
                <span>가격:{item.price}</span>
              </div>
            </Styled.DescPart>
          </Styled.InfoItem>
        ))}
      </ul>
    </Styled.Info>
  );
}
