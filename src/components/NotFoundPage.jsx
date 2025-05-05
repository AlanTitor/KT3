import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const nav = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Страница не найдена</h2>
      <button onClick={() => nav('/products')}>
        Вернуться к списку товаров
      </button>
    </div>
  );
}
