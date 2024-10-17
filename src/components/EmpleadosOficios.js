import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';

export default class EmpleadosOficios extends Component {
    selectOficios = React.createRef();

    state = {
        oficios: [],
        empleados: []
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        let oficioSeleccionado = this.selectOficios.current.value;
        var request = "api/empleados/getempleadosoficio/empleadosoficio/" 
        + oficioSeleccionado;
        var url = Global.urlApiEmpleados + request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                empleados: response.data
            })
        })
    }

    loadOficios = () => {
        var request = "api/empleados/getOficios/oficios";
        var url = Global.urlApiEmpleados + request;
        axios.get(url).then(response => {
            //AQUI TENEIS QUE RECORRER LOS EMPLEADOS DE response.data
            //Y DE ALGUNA FORMA, QUEDARNOS SOLO CON LOS OFICIOS DIFERENTES (IF)
            this.setState({
                oficios: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadOficios();
    }
  render() {
    return (
      <div>
        <h1>Empleados Oficios</h1>
        <form>
            <label>Seleccione un oficio</label>
            <select ref={this.selectOficios}>
                {
                    this.state.oficios.map((oficio, index) => {
                        return (<option key={index}>{oficio}</option>)
                    })
                }
            </select>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button>
        </form>
        <ul>
                {
                    this.state.empleados.map((empleado, index) => {
                        return (<li key={index}>{empleado.apellido}</li>)
                    })
                }
        </ul>
        </div>
    )
  }
}
