import React, { ReactElement } from 'react';

import { Container, ShelfWrapper, TopBookShelf, BottomBookShelf } from './Bookcase.styles';

import { Book } from '../index'

type BookcaseProps = {
  bookshelf: {
    topShelf: BookType[]
    bottomShelf: BookType[]
  }
}

const Bookcase = ({ bookshelf }: BookcaseProps) => {
  return (
    <Container>
      <ShelfWrapper>
        <TopBookShelf>
          {
            bookshelf.topShelf.map((book: BookType): ReactElement => {
              return (book.color === "") && (book.letter === "") ? 
              <>
              </> : 
              <Book color={book.color} letter={book.letter} />
            })
          }
        </TopBookShelf>
        <BottomBookShelf>
          {
            bookshelf.bottomShelf.map((book: BookType): ReactElement => {
              return (book.color === "") && (book.letter === "") ? 
              <>
              </> : 
              <Book color={book.color} letter={book.letter} />
            })
          }
        </BottomBookShelf>
      </ShelfWrapper>
    </Container>
  );
};

export default Bookcase;
