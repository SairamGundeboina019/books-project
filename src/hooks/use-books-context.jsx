import BooksContext from '../context/books';
import { useContext } from 'react';


function useBooksConext() {
  return useContext(BooksContext);

}

export default useBooksConext;