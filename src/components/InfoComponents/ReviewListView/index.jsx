import React from 'react';
import Styled from './styles';

import ReviewItemsView from '../ReviewItemsView';

export default function index() {
  return (
    <Styled.ReviewList>
      <ReviewItemsView />
    </Styled.ReviewList>
  );
}
