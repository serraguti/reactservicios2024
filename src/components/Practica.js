import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class Practica extends Component {
    selectEquipos = React.createRef();    
    selectJugadores = React.createRef();    
    cajaNombre = React.createRef();

    state = {
        equipos: [],
        jugadores: [],
        jugador: null
    }

    loadEquipos = () =>{
        var request = "api/equipos";
        var url = Global.urlPractica + request;
        console.log("Antes del servicio");
        axios.get(url).then(response => {
            console.log("Leyendo servicio");
            this.setState({
                equipos: response.data
            })
        })
        console.log("Despues del servicio");
    }

    buscarJugadores = (e) => {
        e.preventDefault();
        let idEquipo = this.selectEquipos.current.value;
        let request = "api/Jugadores/JugadoresEquipos/" + idEquipo;
        var url = Global.urlPractica + request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                jugadores: response.data
            })
        })
    }

    buscarJugadoresNombre = (e) => {
        e.preventDefault();
        let nombre = this.cajaNombre.current.value;
        let request = "api/Jugadores/FindJugadores/" + nombre;
        var url = Global.urlPractica + request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                jugadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipos();
    }

  render() {
    return (
      <div>
        <h1>Mini Practica React</h1>
        <ol>
            <li>
                <b>Al iniciar el Component, cargar los Equipos</b>
            </li>
            <li>
                <b>Buscaremos jugadores por equipo seleccionado</b>
            </li>
            <li>
                <b>Buscaremos jugadores por su nombre</b>
            </li>
            <li>
                <b style={{color:"red"}}>No mostraremos la TABLA hasta que no tengamos JUGADORES</b>
            </li>
        </ol>
        <form>
            <label>Nombre jugador</label>
            <input type="text" ref={this.cajaNombre}/>
            <button onClick={this.buscarJugadoresNombre}>
                Buscar por NOMBRE
            </button>
            <hr/>
            <label>Seleccione un equipo</label>
            <select ref={this.selectEquipos}>
                {
                    this.state.equipos.map((equipo, index) => {
                        return (<option key={index} value={equipo.idEquipo}>
                            {equipo.nombre}
                        </option>)
                    })
                }
            </select>
            <button onClick={this.buscarJugadores}>
                Buscar Jugadores
            </button>
        </form>
        {
            this.state.jugadores.length > 0 &&
            (        <table border="1">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Posicion</th>
                        <th>Pais</th>
                        <th>Fecha nacimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.jugadores.map((jugador, index) => {
                            return (<tr key={index}>
                                        <td>
                                            <img src={jugador.imagen} 
                                            style={{width: "80px", height: "90px"}}/>
                                        </td>
                                        <td>{jugador.nombre}</td>
                                        <td>{jugador.posicion}</td>
                                        <td>{jugador.pais}</td>
                                        <td>{jugador.fechaNacimiento}</td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>)
        }

      </div>
      
    )
  }
}
