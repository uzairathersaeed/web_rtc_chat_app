import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ContextProvider} from './SocketContext';
import './style.css';
const el =document.getElementById('root');
const root = ReactDOM.createRoot(el)
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);