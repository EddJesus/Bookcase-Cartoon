import React, { useState } from 'react';
import { FilterButton, Lady } from '../index'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateBottomShelf, updateTopShelf } from '../../store/bookshelf/Bookshelf.store';

import { 
  Container,
  PanelItems, 
  PanelButtons, 
  PanelLabel, 
  GrayRow, 
  ActiveButton 
} from './Board.styles';

const Board = () => {
  const [alphabitcsActive, setAlphabitcsActive] = useState(false);
  const [colorsActive, setColorsActive] = useState(false);
  const [sizeActive, setSizeActive] = useState(false);
  const [alphabitcsOrdered, setAlphabitcsOrdered] = useState(false);
  const [colorsOrdered, setColorsOrdered] = useState(false);
  const [sizeOrdered, setSizeOrdered] = useState(false);
  const [action, setAction] = useState('');

  const dispatch = useDispatch();
  const bookshelf = useSelector((state: RootState) => state.bookshelf)

  const filterBySize = (books: BookType[]) => {
    return books.sort((a, b) => {
      if(sizeOrdered){
        return (a.size > b.size) ? 1 : ((b.size > a.size) ? -1 : 0);
      }else{
        return (a.size < b.size) ? 1 : ((b.size < a.size) ? -1 : 0); 
      }
    });
  }
  
  const filterByLetter = (books: BookType[]) => {
    return books.sort((a, b) => {
      if(alphabitcsOrdered){
        return (a.letter > b.letter) ? 1 : ((b.letter > a.letter) ? -1 : 0);
      }else{
        return (a.letter < b.letter) ? 1 : ((b.letter < a.letter) ? -1 : 0);
      }
    });
  }
  
  const filterByColor = (books: BookType[]) => {
    const colors = {red: 0, orange: 1, yellow: 2, green: 3, blue: 4, cyan: 5, purple: 6, violet: 7, pink: 8}
    return books.sort((a, b) => {
      if(colorsOrdered){
        // @ts-ignore
        return colors[a.color] - colors[b.color];
      }else{
        // @ts-ignore
        return colors[b.color] - colors[a.color];
      }
    }); 
  }

  const enableFilterType = (filterType:string) => {
    switch (filterType) {
      case "alphabetics":
          setAlphabitcsActive(true)
          setColorsActive(false)
          setSizeActive(false)
          break;
      case "colors":
        setAlphabitcsActive(false)
        setColorsActive(true)
        setSizeActive(false)
        break;
      case "size":
        setAlphabitcsActive(false)
        setColorsActive(false)
        setSizeActive(true)
        break;
      default:
        break;
    }
    setAction(filterType)
  }

  const filter = (action: string) => {
    const TopShelf = Array.from(bookshelf.topShelf);
    const BottomShelf = Array.from(bookshelf.bottomShelf);

    let reorderedTopShelf;
    let reorderedBottomShelf;

    switch (action) {
      case 'alphabetics':
        reorderedTopShelf = filterByLetter(TopShelf)
        reorderedBottomShelf = filterByLetter(BottomShelf)
        setAlphabitcsOrdered(!alphabitcsOrdered)
          break;
      case 'colors':
        reorderedTopShelf = filterByColor(TopShelf)
        reorderedBottomShelf = filterByColor(BottomShelf)
        setColorsOrdered(!colorsOrdered)
          break;      
      case 'size':
        reorderedTopShelf = filterBySize(TopShelf)
        reorderedBottomShelf = filterBySize(BottomShelf)
        setSizeOrdered(!sizeOrdered)
          break;
      default:
          break;
    }

    dispatch(updateBottomShelf(reorderedBottomShelf))
    dispatch(updateTopShelf(reorderedTopShelf))
  }

  return (
    <Container>
      <Lady />
      <PanelItems>
        <PanelLabel>
          SORT BY
        </PanelLabel>
        <PanelButtons>
          <FilterButton active={alphabitcsActive} filterType='alphabetics' onClick={() => enableFilterType('alphabetics')} />
          <FilterButton active={colorsActive} filterType='colors' onClick={() => enableFilterType('colors')} />
          <FilterButton active={sizeActive} filterType='size' onClick={() => enableFilterType('size')} />
        </PanelButtons>
        <GrayRow />
        <ActiveButton onClick={() => filter(action)} />
      </PanelItems>
    </Container>
  );
};

export default Board;
