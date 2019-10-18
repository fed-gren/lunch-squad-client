import React, { useState, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import Styled from './styles';
import { RestaurantContext } from '../../../contexts/RestaurantContext';

import ThumbnailView from '../../SharedComponents/ThumbnailView';
import RestaurantInfoView from '../RestaurantInfoView';

export default function RestaurantItemsView() {
  const [hoverId, setHoverId] = useState(null);
  const { filteredRestaurants, setHoveredRestaurant } = useContext(RestaurantContext);

  const mouseEnterHandler = useCallback((info) => {
    setHoveredRestaurant(info);
    setHoverId(info.id);
  }, []);

  const mouseLeaveHandler = useCallback(() => {
    setHoveredRestaurant(null);
    setHoverId(null);
  }, []);

  return (
    filteredRestaurants && filteredRestaurants.map((info) => (
      <Styled.RestaurantItem
        onMouseEnter={() => mouseEnterHandler(info)}
        onMouseLeave={() => mouseLeaveHandler()}
        key={info.id}
      >
        <Link to={`/${info.id}`}>
          <ThumbnailView
            width="5rem"
            imageUrl={info.thumnailImageURL}
            padding="0.5rem"
            circle
          />
          <RestaurantInfoView
            {...info}
            {...{ hoverFlag: info.id === hoverId }}
          />
        </Link>
      </Styled.RestaurantItem>
    ))
  );
}
