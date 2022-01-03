import React from 'react';

import { 
  Container,
  PanelItems, 
  PanelButtons, 
  PanelLabel, 
  GrayRow, 
  ActiveButton 
} from './Board.styles';

import { FilterButton, Lady } from '../index'

const Board = () => {
  return (
    <Container>
      <Lady />
      <PanelItems>
        <PanelLabel>
          SORT BY
        </PanelLabel>
        <PanelButtons>
          <FilterButton active icon='alphabetics'/>
          <FilterButton active icon='colors'/>
          <FilterButton active icon='size'/>
        </PanelButtons>
        <GrayRow />
        <ActiveButton />
      </PanelItems>
    </Container>
  );
};

export default Board;
