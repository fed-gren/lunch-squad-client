import React from "react";
import Styled from "./styles";

export default function index({ id, username }) {
  return (
    <Styled.ReviewItem>
      {/* 댓글별 맛점수, 가격 점수, 내용, 등록일, 등록자 */}
      {/* <Styled.DescPart>
        <Styled.DescTextPart>
          <h3>{item.name}</h3>
          <div>
            <span>추천메뉴:{item.recommendedMenu}</span>
            <span>가격:{item.price}</span>
          </div>
        </Styled.DescTextPart>
        <InfoButtonPartView id={item.id} />
      </Styled.DescPart> */}
      {id}, {username}
    </Styled.ReviewItem>
  );
}
