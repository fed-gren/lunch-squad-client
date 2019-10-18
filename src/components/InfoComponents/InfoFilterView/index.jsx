import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Styled from './styles';
import { foodType } from '../../../constants';
import { styles } from '../../../../config';
import { InfoContext } from '../../../contexts/InfoContext';
import { RestaurantContext } from '../../../contexts/RestaurantContext';

import RestaurantListView from '../RestaurantListView';
import ButtonView from '../../SharedComponents/ButtonView';
import DetailView from '../DetailView';

const toggleButtonStyles = {
  width: '2.6rem',
  fontSize: '0.8rem',
  color: styles.filteredItemColor,
  border: `1px solid ${styles.filteredItemColor}`,
};

export default function InfoFilterView() {
  const { foodTypeCategories, setFoodTypeCategories } = useContext(
    RestaurantContext,
  );

  const clickHandler = ({ fType }) => {
    const tempObj = { ...foodTypeCategories[fType] };
    const onNum = Object.values(foodTypeCategories).reduce(
      (acc, cur) => (cur.isOn ? acc + 1 : acc),
      0,
    );
    if (onNum <= 1 && tempObj.isOn) return;

    tempObj.isOn = !tempObj.isOn;
    setFoodTypeCategories({
      ...foodTypeCategories,
      [fType]: { ...tempObj },
    });
  };

  const { state } = useContext(InfoContext);

  return (
    <Styled.InfoFilter showFlag={state.filterShowFlag} sortShowFlag={state.sortShowFlag}>
      <Styled.InfoFilterDesc>
        <p>필터</p>
      </Styled.InfoFilterDesc>
      <Styled.InfoFilterButtons>
        <ButtonView
          name={foodTypeCategories[foodType.KO_FOOD].name}
          isOff={!foodTypeCategories[foodType.KO_FOOD].isOn}
          onClick={() => clickHandler({ fType: foodTypeCategories[foodType.KO_FOOD].name })}
          {...toggleButtonStyles}
        />
        <ButtonView
          name={foodTypeCategories[foodType.JP_FOOD].name}
          isOff={!foodTypeCategories[foodType.JP_FOOD].isOn}
          onClick={() => clickHandler({ fType: foodTypeCategories[foodType.JP_FOOD].name })}
          {...toggleButtonStyles}
        />
        <ButtonView
          name={foodTypeCategories[foodType.WS_FOOD].name}
          isOff={!foodTypeCategories[foodType.WS_FOOD].isOn}
          onClick={() => clickHandler({ fType: foodTypeCategories[foodType.WS_FOOD].name })}
          {...toggleButtonStyles}
        />
        <ButtonView
          name={foodTypeCategories[foodType.CH_FOOD].name}
          isOff={!foodTypeCategories[foodType.CH_FOOD].isOn}
          onClick={() => clickHandler({ fType: foodTypeCategories[foodType.CH_FOOD].name })}
          {...toggleButtonStyles}
        />
      </Styled.InfoFilterButtons>

      <Router>
        <Route exact path="/" component={RestaurantListView} />
        <Route path="/:id" component={DetailView} />
      </Router>
    </Styled.InfoFilter>
  );
}
