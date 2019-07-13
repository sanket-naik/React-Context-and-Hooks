import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/movieList'
import Nav from './components/nav'
import 'bootstrap/dist/css/bootstrap.css'
import {MovieProvider} from './components/context/movieContext'
import AddMovie from './components/addMovie'


function App() {
  return (
    <MovieProvider>
        <div className="App">
            <Nav/>
            <MovieList/>
            <AddMovie/>
        </div>
    </MovieProvider>
  );
}

export default App;
