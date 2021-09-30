import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro 
      titulo="Situação do aluno" 
      aluno="Jurandir" nota={9.3}/>
      <Fragmento/>
  </div>,
  document.getElementById('root')
)
