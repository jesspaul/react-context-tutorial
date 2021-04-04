export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK': 
            return [...state, {
                title: action.book.title,
                author: action.book.author,
            }];
        case 'REMOVE_BOOK':
            return state.filter((book, idx) => idx !== action.idx);
        default: 
            return state;
    }
};