import React, { useState, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import Styled from './styles';
import { RestaurantContext } from '../../../contexts/RestaurantContext';
import { BeforeStateContext } from '../../../contexts/BeforeStateContext';

import ThumbnailView from '../../SharedComponents/ThumbnailView';
import RestaurantInfoView from '../RestaurantInfoView';

export default function RestaurantItemsView() {
  const [hoverId, setHoverId] = useState(null);
  const { filteredRestaurants, setHoveredRestaurant } = useContext(RestaurantContext);
  const { beforeState, setBeforeState } = useContext(BeforeStateContext);

  const mouseEnterHandler = useCallback((info) => {
    setHoveredRestaurant(info);
    setHoverId(info.id);
  }, []);

  const mouseLeaveHandler = useCallback(() => {
    setHoveredRestaurant(null);
    setHoverId(null);
  }, []);

  const clickHandler = useCallback((info) => {
    setBeforeState({
      ...beforeState,
      pathname: info.id,
    });
  }, []);

  return (
    filteredRestaurants && filteredRestaurants.map((info) => (
      <Styled.RestaurantItem
        onMouseEnter={() => mouseEnterHandler(info)}
        onMouseLeave={() => mouseLeaveHandler()}
        key={info.id}
        onClick={() => clickHandler(info)}
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
