import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

export default props => {
  
  const [books, dispatch] = useReducer(bookReducer, [], () =>
    localStorage.books ? JSON.parse(localStorage.books) : []
  );

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};