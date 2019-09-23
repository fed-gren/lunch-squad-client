import React from "react";
import Styled from "./styles";

export default function index() {
  const dummyReviews = [
    "평냉계의 신화라고들 함 ",
    "맛있어요. 소고기도 맛있는데 엄청 비쌈 ",
    "전 맛있게 먹음",
    "아... 노맛",
    "서비스가 좋았습니다.",
    "또 가고 싶네요"
  ];
  return (
    dummyReviews &&
    dummyReviews.map((c, idx) => {
      return (
        <Styled.ReviewItem key={idx}>
          <p>{c}</p>
        </Styled.ReviewItem>
      );
    })
  );
}
