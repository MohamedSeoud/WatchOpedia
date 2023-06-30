import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Component/Header';
import Counter from './Component/Counter';
import MovieList from './Component/Movies/MovieList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Counter/>
    <MovieList/>
  </React.StrictMode>
);

