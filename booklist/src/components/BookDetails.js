import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book, idx }) => {
    const { dispatch } = useContext(BookContext);
    return (
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', idx})}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
}
 
export default BookDetails;