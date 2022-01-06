import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { RootState } from '../../store'
import { addBookToTopShelf, addBookToBottomShelf, updateTopShelf, updateBottomShelf } from '../../store/bookshelf/Bookshelf.store'

import Ground from '../../assets/ground.svg'
import BgStripes from '../../assets/bg_stripes.svg'
import { Board, Bookcase } from '../../components/index'

import { 
  Container, 
  Header, 
  Body, 
  StyledLogo, 
  AddBookButton, 
  StyledForm, 
  Input,
  CreateButton
} from './Home.styles'

const Home = () => {
  const [addBookButtomVisibility, setAddBookButtomVisibility] = useState(false)

  const dispatch = useDispatch();
  const bookshelf = useSelector((state: RootState) => state.bookshelf)

  const reorder = (
    shelf: any[],
    startIndex: number,
    endIndex: number
  ): any[] => {
    const result = Array.from(shelf);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  
  const reorderBookshelf = ({ source, destination }: DropResult) => {  
    if (!destination) return;

    let current = [];
    let next = [];

    let shelf = source.droppableId === "top" ? "top" : "bottom";

    if(shelf === "top"){
      current = bookshelf.topShelf;
      next = bookshelf.bottomShelf;
    }else {
      current = bookshelf.bottomShelf;
      next = bookshelf.topShelf;
    }

    const target = current[source.index];

    if (shelf === destination.droppableId) {
      const reordered = reorder(current, source.index, destination.index);
      dispatch(shelf === "top" ? updateTopShelf(reordered) : updateBottomShelf(reordered))
    }else{
      const updatedCurrent = Array.from(current);
      const updatedNext = Array.from(next);

      updatedCurrent.splice(source.index, 1);
      updatedNext.splice(destination.index, 0, target);

      if(shelf === "top"){
        dispatch(updateTopShelf(updatedCurrent))
        dispatch(updateBottomShelf(updatedNext))
      }else {
        dispatch(updateBottomShelf(updatedCurrent))
        dispatch(updateTopShelf(updatedNext))
      }
    }
    
  };

  const addBookToShelf = (shelf: string, letter: string, color: string, letterColor: string) => {
    switch (shelf.toLowerCase()) {
      case "top":
        dispatch(addBookToTopShelf({letter, color, letterColor}));
          break;
      case "bottom":
        dispatch(addBookToBottomShelf({letter, color, letterColor}));
          break;
      default:
        window.alert("Shelf doesn't exist")
        break;
    }

    // @ts-ignore
    document.getElementById("shelf").value = ''; document.getElementById("letter").value = ''; document.getElementById("color").value = ''; document.getElementById("letter-color").value = ''
  }

  return (
    <Container>
      <Header style={{ backgroundImage: `url(${BgStripes})` }}>
        <AddBookButton onClick={() => setAddBookButtomVisibility(!addBookButtomVisibility)}>
          {addBookButtomVisibility ? "Return Vizpert logo" : "Add new book"}
        </AddBookButton>
        <StyledLogo hidden={addBookButtomVisibility}/>
        <StyledForm hidden={!addBookButtomVisibility}>
          <Input id="shelf" name="shelf" type="text" placeholder="Shelf"/>
          <Input id="letter" name="letter" type="text" placeholder="Letter"/>
          <Input id="color" name="color" type="text" placeholder="Book's color"/>
          <Input id="letter-color" name="letter-color" type="text" placeholder="Letter's color"/>
          {/* @ts-ignore */}
          <CreateButton onClick={() => addBookToShelf(document.getElementById("shelf").value, document.getElementById("letter").value, document.getElementById("color").value, document.getElementById("letter-color").value)}>Criar</CreateButton>
        </StyledForm>
      </Header>
      <Body style={{ backgroundImage: `url(${Ground})` }}>
        <DragDropContext onDragEnd={reorderBookshelf}>
          <Bookcase  bookshelf={bookshelf}/>
        </DragDropContext>
        <Board />
      </Body>
    </Container>
  )
}

export default Home
