import logo from './logo.svg';
import './App.css';

import TreeStructure from './components/TreeStructure';
import Dropdown from './components/Dropdown';
import ColorGuesser from './components/ColorGuesser';
import TrafficLights from './components/TrafficLights.tsx';
import Board from './Chess/Board.tsx';
import SwapInList from './components/SwapInList.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Breadcrumb/Home.jsx';
import ProductList from './Breadcrumb/ProductList.jsx';
import ProductDetails from './Breadcrumb/ProductDetails.jsx';
import Pagination from './Pagination/Pagination.jsx';





function App() {
  return (
    <>
      <Pagination/>
    </>
  )
}

export default App;
