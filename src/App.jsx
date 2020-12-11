import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
      <ProductCard titulo="Producto 01" precio="100" />
      <ProductCard titulo="Producto 02" precio="200" />
      <ProductCard titulo="Producto 03" precio="300" />
      <ProductCard titulo="Producto 04" precio="400"/>
      </div>

    </div>
  );
}

export default App;
