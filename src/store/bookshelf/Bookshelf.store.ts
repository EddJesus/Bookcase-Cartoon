import { createSlice } from '@reduxjs/toolkit';

const bookShelf = createSlice({
  name: 'bookShelf',
  initialState: {
    books: 0,
    topShelf: [
      {
        id: '',
        color: '',
        letter: '',
        letterColor: ''
      }
    ],
    bottomShelf : [
      {
        id: '',
        color: '',
        letter: '',
        letterColor: ''
      }
    ]
  },
  reducers: {
    addBookToTopShelf: (state, { payload }) => {
      if(state.topShelf.length > 9) {
        window.alert('Shelf full of books! Try the bottom shelf')
        return
      }
      state.topShelf.push({...payload, id: String(state.books + 1)})
      state.books += 1;
    },
    addBookToBottomShelf: (state, { payload }) => {
      if(state.bottomShelf.length > 9) {
        window.alert('Shelf full of books! Try the bottom shelf')
        return
      }
      state.bottomShelf.push({...payload, id: String(state.books + 1)})
      state.books += 1;
    },
    updateTopShelf: (state, { payload }) => {
      state.topShelf = payload;
    },
    removeBookFromTopShelf: (state, { payload }) => {
      const index = state.topShelf.indexOf(payload)
      state.topShelf.splice(index, 1)
    },
    removeBookFromBottomShelf: (state, { payload }) => {
      const index =state.bottomShelf.indexOf(payload)
      state.bottomShelf.splice(index, 1);
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
  removeBookFromTopShelf,
  removeBookFromBottomShelf,
  updateTopShelf,
  updateBottomShelf
} = actions;

export default reducer;
