import React, { useContext } from 'react';
import Styled from './styles';
import { InfoContext } from '../../../contexts/InfoContext';

import RestaurantItemsView from '../RestaurantItemsView';

export default function RestaurantListView() {
  const { state } = useContext(InfoContext);

  return (
    <Styled.RestaurantList foldFlag={state.foldFlag}>
      <RestaurantItemsView />
    </Styled.RestaurantList>
  );
}
