import React, { Fragment, useState, useRef, useEffect } from 'react'
import {TodoItem} from '../componentes/TodoItem'
import { v4 as uuid } from 'uuid';

const KEY="TODOLIST"
export function PostItSimulator() {
    const [postIts, configurarPost] = useState([]);
    const [titulo, settitulo] = useState('');
    const [descripcion, setdescripcion] = useState('');
    const [important, setImportant] = useState(false);
  
    const agregarPostIts = (event) => {
      event.preventDefault();
      if (!validateInput(titulo, descripcion)) return;
      const newPostIt = {
        titulo,
        descripcion,
        important,
      };
      configurarPost([...postIts, newPostIt]);
      settitulo('');
      setdescripcion('');
      setImportant(false);
    };
  
    const eliminarPostIts = (index) => {
      configurarPost(postIts.filter((postIt, i) => i !== index));
    };
  
    const validateInput = (titulo, descripcion) => {
      if (!descripcion) {
        alert('La descripción es obligatoria');
        return false;
      }
      return true;
    };
  
    return (
      <div>
        <h1>Post It Simulator!</h1>
        <form>
          <input
            type="text"
            value={titulo}
            onChange={(event) => settitulo(event.target.value)}
            placeholder="Título"
          />
          <input
            type="text"
            value={descripcion}
            onChange={(event) => setdescripcion(event.target.value)}
            placeholder="Descripción"
            required
          />
          <label>
            <input
              type="checkbox"
              checked={important}
              onChange={(event) => setImportant(event.target.checked)}
            />
            Importante
          </label>
          <button onClick={agregarPostIts}>Agregar</button>
        </form>
        <div id="post-it-container">
          {postIts.map((postIt, index) => (
            <div
              key={index}
              className={`post-it ${postIt.important ? 'important' : ''}`}
            >
              <div className="titulo">{postIt.titulo}</div>
              <div className="descripcion">{postIt.descripcion}</div>
              <span
                className="delete"
                onClick={() => eliminarPostIts(index)}
              >
                X
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
