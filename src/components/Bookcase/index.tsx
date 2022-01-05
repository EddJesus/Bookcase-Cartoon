import React from 'react';

import { Container, ShelfWrapper, TopBookShelf, BottomBookShelf } from './Bookcase.styles';

import { Book } from '../index'

const Bookcase = () => {
  return (
    <Container>
      <ShelfWrapper>
        <TopBookShelf>
          <Book color='#e40c0c' letter="A"/>
          <Book color='#5e38ac' letter="b" />
          <Book color='#efd9d4' letter="c" />
          <Book color='#2092cf' letter="d" />
        </TopBookShelf>
        <BottomBookShelf>
          <Book color='#a5226f' letter="e" />
          <Book color='#19aa1e' letter="f" />
          <Book color='#cec817' letter="a" />
        </BottomBookShelf>
      </ShelfWrapper>
    </Container>
  );
};

export default Bookcase;
