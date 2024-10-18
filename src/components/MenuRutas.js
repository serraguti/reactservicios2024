import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul id="menurutas">
            <li>
                <a href="/">Home</a> | 
            </li>
            <li>
                <a href="/tabla/21">Tabla multiplicar 21</a> | 
            </li>
            <li>
                <a href="/tabla/66">Tabla multiplicar 66</a> | 
            </li>
            <li>
                <a href="/tabla/55">Tabla multiplicar 55</a> | 
            </li>            
            <li>
                <a href="/noexisto">Sin ruta</a> | 
            </li>
        </ul>
      </div>
    )
  }
}
