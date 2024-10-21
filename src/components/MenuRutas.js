import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul id="menurutas">
            <li>
                <NavLink to="/">Home</NavLink> | 
            </li>
            <li>
                <NavLink to="/practica">Practica</NavLink> | 
            </li>            
            <li>
                <NavLink to="/tabla/21">Tabla multiplicar 21</NavLink> | 
            </li>
            <li>
                <NavLink to="/tabla/66">Tabla multiplicar 66</NavLink> | 
            </li>
            <li>
                <NavLink to="/tabla/55">Tabla multiplicar 55</NavLink> | 
            </li>            
            <li>
                <NavLink to="/noexisto">Sin ruta</NavLink> | 
            </li>
        </ul>
      </div>
    )
  }
}
