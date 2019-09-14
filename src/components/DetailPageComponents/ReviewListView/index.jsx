import React from "react";
import Styled from "./styles";
import { data } from "../../../../config";
//components
import ReviewItemView from "../ReviewItemView";

export default function index() {
  return (
    <Styled.Reviews>
      <ul>
        {data.dummyReviews.map(item => (
          <ReviewItemView key={item.id} {...item} />
        ))}
      </ul>
    </Styled.Reviews>
  );
}
