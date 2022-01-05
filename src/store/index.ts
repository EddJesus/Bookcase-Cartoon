import { configureStore } from '@reduxjs/toolkit';

import bookShelfReducer from './bookshelf/Bookshelf.store';

const store = configureStore({
  reducer: {
    bookshelf: bookShelfReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
