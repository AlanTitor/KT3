import React from 'react';

export default function Rating({ value }) {
  const stars = Math.round(value);
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{ i < stars ? '★' : '☆' }</span>
      ))}
    </div>
  );
}
