import { addBookToTopShelf, addBookToBottomShelf, removeBookFromTopShelf, removeBookFromBottomShelf } from './Bookshelf.store';

export const changeBookFromTopShelf = (book: BookType) => async (dispatch: any) => {
  dispatch(removeBookFromTopShelf(book));
  dispatch(addBookToBottomShelf(book));
};

export const changeBookFromBottomShelf = (book: BookType) => async (dispatch: any) => {
  dispatch(removeBookFromBottomShelf(book));
  dispatch(addBookToTopShelf(book));
}