import React from 'react';

import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}
