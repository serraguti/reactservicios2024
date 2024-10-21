import React, { Component } from 'react'

import { useParams } from 'react-router-dom'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TablaMultiplicar from './TablaMultiplicar'
import Home from './Home'
import NotFound from './NotFound'
import Practica from './Practica'
import MenuRutas from './MenuRutas'

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
        //ESTA FUNCION NOS SERVIRA PARA CAPTURAR LOS 
        //PARAMETROS EN UNA RUTA.  
        //PARA SEPARAR PROPS DE PARAMS VOY A LLAMAR A NUESTRO 
        //PARAMETRO EN RUTA minumero
        var { minumero } = useParams();
        //DEVOLVEMOS EL COMPONENT TABLA MULTIPLICAR CON SU PROPS
        //DE LA VARIABLE numero
        return <TablaMultiplicar numero={minumero}/>
    }

    return (
      <BrowserRouter>
      <MenuRutas/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/practica" element={<Practica/>}/>
            <Route path="/tabla/:minumero" 
                element={<TablaMultiplicarElement/>}/>
            {/* PARA LAS RUTAS QUE NO EXISTEN DEBEMOS UTILIZAR
            UN ASTERISCO DENTRO DEL PATH Y DEBE SER 
            LA ULTIMA ETIQUETA DE <Routes> */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
