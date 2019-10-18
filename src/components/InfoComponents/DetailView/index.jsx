import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Styled from './styles';
import { metadata } from '../../../../config';
import InfoLayout from '../../InfoLayout';
import DetailInfoView from '../DetailInfoView';
import ReviewContainerView from '../ReviewContainerView';
import { RestaurantContext } from '../../../contexts/RestaurantContext';

DetailView.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default function DetailView({ match }) {
  const {
    restaurants,
    selectedRestaurant,
    setSelectedRestaurant,
    setHoveredRestaurant,
  } = useContext(RestaurantContext);
  const restaurantId = match.params.id;

  useEffect(() => {
    if (!restaurants) return;
    const temp = restaurants.filter(({ id }) => id === restaurantId)[0];

    setSelectedRestaurant(temp);
    return () => {
      setSelectedRestaurant(null);
      setHoveredRestaurant(null);
    };
  }, [restaurants, match.params.id]);

  return (
    <Styled.DetailView>
      <InfoLayout>
        {selectedRestaurant && (
          <>
            <Helmet>
              <title>
                {`${metadata.title} - ${selectedRestaurant.restaurantName}`}
              </title>
            </Helmet>
            <DetailInfoView {...selectedRestaurant} />
            <ReviewContainerView />
          </>
        )}
      </InfoLayout>
    </Styled.DetailView>
  );
}
