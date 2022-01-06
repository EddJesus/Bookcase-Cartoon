import React, { ReactElement } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd'

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
            <Droppable droppableId='top' direction="horizontal">
              { (provided) => (
                <TopBookShelf {...provided.droppableProps} ref={provided.innerRef}>
                    {bookshelf.topShelf.map(({id, color, letter, letterColor, size}: BookType, index): ReactElement => {
                      return (id === '' && letter === '') ? 
                      <></>
                      :
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                            <Book color={color} letter={letter} letterColor={letterColor} size={size}/>
                          </div>
                        )}
                      </Draggable>
                    })
                  }
                  {provided.placeholder}
                </TopBookShelf>
              ) }
            </Droppable>
            <Droppable droppableId='bottom' direction="horizontal">
              { (provided) => (
                <BottomBookShelf {...provided.droppableProps} ref={provided.innerRef}>
                    {bookshelf.bottomShelf.map(({id, color, letter, letterColor, size}: BookType, index): ReactElement => {
                      return (id === '' && letter === '') ? 
                        <></>
                        :
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                              <Book color={color} letter={letter} letterColor={letterColor} size={size} />
                            </div>
                          )}
                        </Draggable>
                    })
                  }
                  {provided.placeholder}
                </BottomBookShelf>
              ) }
            </Droppable>
        </ShelfWrapper>
      </Container>
  );
};

export default Bookcase;
