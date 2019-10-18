import React, { useContext, useEffect } from 'react';
import KakaoMapContext, { CustomOverlay } from 'react-kakao-maps';
import { RestaurantContext } from '../../../contexts/RestaurantContext';
import RestaurantOverlay from '../RestaurantOverlay';


export default () => {
  const { filteredRestaurants, selectedRestaurant } = useContext(
    RestaurantContext,
  );
  const { kakaoMapObj, map } = useContext(KakaoMapContext);

  useEffect(() => {
    if (!selectedRestaurant || !map) return;
    const { lat, lng } = selectedRestaurant;

    map.setCenter(new kakaoMapObj.maps.LatLng(lat, lng));
    map.setLevel(2);
  }, [selectedRestaurant]);

  return (
    filteredRestaurants
    && filteredRestaurants.map(({
      id, lat, lng, restaurantName,
    }) => (
      <CustomOverlay
        key={id}
        content={<RestaurantOverlay message={restaurantName} />}
        {...{ lat, lng }}
        yAnchor={1}
      />
    ))
  );
};
