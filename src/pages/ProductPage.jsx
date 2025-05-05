import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';

export default function ProductPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Нет такого товара');
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(() => nav('/not-found', { replace: true }));
  }, [id, nav]);

  if (!product) return <p>Загрузка...</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: '100%', margin: '1rem 0' }}
      />
      <Rating value={product.rating.rate} />
      <p>Цена: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => nav(-1)}>Назад</button>
    </div>
  );
}
