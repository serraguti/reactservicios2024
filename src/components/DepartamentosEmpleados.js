import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class DepartamentosEmpleados extends Component {
    selectDepartamento = React.createRef();

    buscarEmpleados = (e) => {
        e.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value;
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento;
        var url = Global.urlApiEmpleados + request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                empleados: response.data
            })
        })
    }

    state = {
        empleados: [],
        departamentos: []
    }

    loadDepartamentos = () =>{
        var request = "api/departamentos";
        var url = Global.urlApiDepartamentos + request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }
  render() {
    return (
    <div>
        <h1>Departamentos Empleados</h1>
        <form>
            <label>Seleccione un departamento</label>
            <select ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((departamento, index) => {
                        return (<option key={index} value={departamento.Numero}>
                            {departamento.Nombre}
                        </option>)
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
                        return (<li key={index}>
                            {empleado.apellido} - {empleado.oficio}
                            </li>)
                    })
                }
        </ul>
    </div>
    )
  }
}
