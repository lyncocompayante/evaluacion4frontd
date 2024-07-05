import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PostItSimulator, TodoList } from './componentes/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const element=<div>
<PostItSimulator></PostItSimulator>
</div>


root.render(element);
