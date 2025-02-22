import BookShow from './BookShow';
import useBooksConext from '../hooks/use-books-context';



function BookList() {
  const { books } = useBooksConext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
    });

  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;

