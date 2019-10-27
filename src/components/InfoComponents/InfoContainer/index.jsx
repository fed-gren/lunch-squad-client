import React from 'react';
import Styled from './styles';
import { InfoProvider } from '../../../contexts/InfoContext';
import { BeforeStateProvider } from '../../../contexts/BeforeStateContext';

import InfoTopbar from '../InfoTopbar';
import InfoSortView from '../InfoSortView';
import InfoFilterView from '../InfoFilterView';

export default function styles() {
  return (
    <Styled.InfoContainer>
      <BeforeStateProvider>
        <InfoProvider>
          <InfoTopbar />
          <InfoSortView />
          <InfoFilterView />
        </InfoProvider>
      </BeforeStateProvider>
    </Styled.InfoContainer>
  );
}
