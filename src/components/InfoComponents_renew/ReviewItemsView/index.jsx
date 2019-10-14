import React, { useContext } from "react";
import Styled from "./styles";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

export default function index() {
  const { selectedRestaurant } = useContext(RestaurantContext);
  const { review: reviews } = selectedRestaurant;

  return (
    reviews &&
    reviews.map((review, idx) => (
      <Styled.ReviewItem key={idx}>
        <p>{review}</p>
      </Styled.ReviewItem>
    ))
  );
}
