import React, { useContext } from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
            <li style={{ background: theme.ui }}>Gone Girl</li>
            <li style={{ background: theme.ui }}>Big Little Lies</li>
            <li style={{ background: theme.ui }}>Sharp Objects</li>
        </ul>
    </div>
    );
}
 
export default BookList;