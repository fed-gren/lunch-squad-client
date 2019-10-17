import React from 'react';
import Styled from './styles';

import MenuItemsView from '../MenuItemsView';

export default function index() {
  return (
    <Styled.MenuList>
      <MenuItemsView />
    </Styled.MenuList>
  );
}
