import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Product } from './components/Products';

function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if(product !== null) window.localStorage.setItem('product', product);
  }, [product]);

  useEffect(() => {
    const localProduct = window.localStorage.getItem('product');
    if(localProduct !== 'null') setProduct(localProduct)
  }, []);

  const handleclick = ({target}) => {
    setProduct(target.innerText);
  }

  return (
    <div> 
      <h1>Preferência: {product}</h1>
      <button onClick={handleclick} style={{marginRight: '1rem'}}>notebook</button>
      <button onClick={handleclick}>smartphone</button>
      <Product product={product} />
    </div>
  );
}

export default App;
