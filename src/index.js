import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer';
import './styles/tailwind.css';

const App = () => <Timer />;

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);
