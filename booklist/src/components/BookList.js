import { useContext } from 'react';
import { BookContext } from '../../../booklist/src/contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map((book, idx) => (
                    <BookDetails book={book} idx={idx} key={idx} />
                ))}
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read.</div>
    )
}
 
export default BookList;