import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';

const rootElement = document.getElementById('app');

createRoot(rootElement).render(<App />);