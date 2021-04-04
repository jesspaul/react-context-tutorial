import { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Sharp Objects', author: 'Gillian Flynn'},
        {title: 'Gone Girl', author: 'Gillian Flynn'},
        {title: 'Big Little Lies', author: 'Liane Moriarty'},
        {title: 'The Girl on the Train', author: 'Paula Hawkins'},
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title, author}]);
    };
    const removeBook = (id) => {
        setBooks(books.filter((book, idx) => idx !== id));
    };
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;