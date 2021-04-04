import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book, idx }) => {
    const { removeBook } = useContext(BookContext);
    return (
        <li onClick={() => removeBook(idx)}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
}
 
export default BookDetails;