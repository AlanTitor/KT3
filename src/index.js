// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';               // ← из нового пакета
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);                           // ← createRoot присутствует
root.render(<App />);
