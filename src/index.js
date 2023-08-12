import React from 'react';
import ReactDOM from 'react-dom'; // Import react-dom for Concurrent Mode
import { createRoot } from 'react-dom'; // Use createRoot directly from react-dom

import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
ReactDOM.render(<App />, container);
