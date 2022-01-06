import { createSlice } from '@reduxjs/toolkit';

const bookShelf = createSlice({
  name: 'bookShelf',
  initialState: {
    books: 9,
    topShelf: [
      {
        id: '0',
        color: 'yellow',
        letter: 'A',
        letterColor: 'black',
        size: 3
      },
      {
        id: '1',
        color: 'red',
        letter: 'B',
        letterColor: 'black',
        size: 2
      },
      {
        id: '2',
        color: 'orange',
        letter: 'C',
        letterColor: 'black',
        size: 4
      },
      {
        id: '3',
        color: 'purple',
        letter: 'D',
        letterColor: 'black',
        size: 4
      },
      {
        id: '4',
        color: 'cyan',
        letter: 'E',
        letterColor: 'black',
        size: 1
      },
      {
        id: '5',
        color: 'violet',
        letter: 'F',
        letterColor: 'black',
        size: 2
      }
    ],
    bottomShelf : [
      {
        id: '6',
        color: 'green',
        letter: 'i',
        letterColor: 'black',
        size: 4
      },
      {
        id: '7',
        color: 'blue',
        letter: 'h',
        letterColor: 'black',
        size: 4
      },
      {
        id: '8',
        color: 'lightpink',
        letter: 'G',
        letterColor: 'black',
        size: 2
      }
    ]
  },
  reducers: {
    addBookToTopShelf: (state, { payload }) => {
      if(state.topShelf.length >= 9) {
        window.alert('Shelf full of books! Try the bottom shelf')
        return
      }
      state.topShelf.push({...payload, id: String(state.books + 1)})
      state.books += 1;
    },
    addBookToBottomShelf: (state, { payload }) => {
      if(state.bottomShelf.length >= 9) {
        window.alert('Shelf full of books! Try the bottom shelf')
        return
      }
      state.bottomShelf.push({...payload, id: String(state.books + 1)})
      state.books += 1;
    },
    updateTopShelf: (state, { payload }) => {
      state.topShelf = payload;
    },
    updateBottomShelf: (state, { payload }) => {
      state.bottomShelf = payload;
    },
  },
});

const { reducer, actions } = bookShelf;

export const { 
  addBookToTopShelf, 
  addBookToBottomShelf,
  updateTopShelf,
  updateBottomShelf
} = actions;

export default reducer;
