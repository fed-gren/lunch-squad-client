import React, { useContext } from 'react';
import Styled from './styles';
import { InfoContext } from '../../../contexts/InfoContext';
import { styles } from '../../../../config';

import SortButtonsView from '../SortButtonsView';

export default function InfoSortView() {
  const { state } = useContext(InfoContext);
  return (
    <Styled.InfoSort showFlag={state.sortShowFlag}>
      <Styled.InfoSortDesc>
        <p>정렬</p>
      </Styled.InfoSortDesc>
      <SortButtonsView />
    </Styled.InfoSort>
  );
}

const activeStyles = {
  color: styles.filteredItemColor,
  borderColor: `${styles.filteredItemColor}`,
};
