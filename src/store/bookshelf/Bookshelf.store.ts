import { createSlice } from '@reduxjs/toolkit';

const bookShelf = createSlice({
  name: 'bookShelf',
  initialState: {
    topShelf: [
      {
        color: '',
        letter: ''
      }
    ],
    bottomShelf : [
      {
        color: '',
        letter: ''
      }
    ]
  },
  reducers: {
    addBookToTopShelf: (state, { payload }) => {
      state.topShelf.push(payload)
    },
    addBookToBottomShelf: (state, { payload }) => {
      state.bottomShelf.push(payload)
    },
    removeBookFromTopShelf: (state, { payload }) => {
      const index = state.topShelf.indexOf(payload)
      state.topShelf.splice(index, 1)
    },
    removeBookFromBottomShelf: (state, { payload }) => {
      const index =state.bottomShelf.indexOf(payload)
      state.bottomShelf.splice(index, 1);
    }
  },
});

const { reducer, actions } = bookShelf;

export const { 
  addBookToTopShelf, 
  addBookToBottomShelf,
  removeBookFromTopShelf,
  removeBookFromBottomShelf 
} = actions;

export default reducer;
