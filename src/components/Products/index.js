import React from 'react';
import { useState, useEffect } from 'react';

export const Product = ({product}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (product !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
      .then(response => response.json())
      .then(result => setData(result))
    }
  }, [product]);

  if(data === null) return null;

  return (
    <div>      
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
    </div>
  )
}