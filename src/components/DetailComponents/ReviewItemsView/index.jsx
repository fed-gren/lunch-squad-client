import React, { useContext } from "react";
import Styled from "./styles";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

export default function index() {
  const { selectedRestaurant } = useContext(RestaurantContext);
  const { review: reviews } = selectedRestaurant;

  return reviews ? (
    reviews.map((c, idx) => {
      return (
        <Styled.ReviewItem key={idx}>
          <p>{c}</p>
        </Styled.ReviewItem>
      );
    })
  ) : (
    <div />
  );
}
