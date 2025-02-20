import BookShow from './BookShow';


function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} onEdit={onEdit} onDelete={onDelete} book={book} />
  ));

  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;

