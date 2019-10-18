import React, { useContext } from 'react';
import Styled from './styles';
import { RestaurantContext } from '../../../contexts/RestaurantContext';

export default function index() {
  const { selectedRestaurant } = useContext(RestaurantContext);
  const { review: reviews } = selectedRestaurant;
  // Todo: Review ID 필요 key값으로 써야 함.
  return (
    reviews
    && reviews.map((review, idx) => (
      <Styled.ReviewItem key={idx}>
        <p>{review}</p>
      </Styled.ReviewItem>
    ))
  );
}
