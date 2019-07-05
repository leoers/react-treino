import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './componentes/menu'
import ChartOne from './componentes/graficoone'


const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Menu />
        <ChartOne />
    </div>
, elemento)
