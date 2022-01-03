import React from 'react';

import { Container } from './Bookcase.styles';

import { BookA, BookB, BookC } from '../../svgs'

const Bookcase = () => {
  return (
    <Container>
      <div style={{width: "100%", height: "100%", maxWidth: "500px", paddingRight: "7%"}}>
      <BookA></BookA>
      <BookB></BookB>
      <BookC></BookC>
      </div>
    </Container>
  );
};

export default Bookcase;
