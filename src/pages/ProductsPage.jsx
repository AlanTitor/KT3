import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '1rem',
      padding: '1rem'
    }}>
      {products.map(prod => (
        <Link
          to={`/product/${prod.id}`}
          key={prod.id}
          style={{
            textDecoration: 'none',
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px'
          }}
        >
          <h3>{prod.title}</h3>
          <Rating value={prod.rating.rate} />
        </Link>
      ))}
    </div>
  );
}
