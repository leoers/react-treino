import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/botao'


const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Bom dia!" />
    </div>
, elemento)
