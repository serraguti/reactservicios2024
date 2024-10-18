import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Empleados extends Component {
    state = {
        empleados: [],
        texto: ""
    }

    loadEmpleados = () => {
        let idDepartamento = this.props.iddepartamento;
        var request = "api/empleados/empleadosdepartamento/" + idDepartamento;
        var url = Global.urlApiEmpleados2 + request;
        console.log("Props Id: " + this.props.iddepartamento);
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    //RECIBIMOS LAS ANTIGUAS PROPS (10)
    componentDidUpdate = (oldProps) => {
        //SI COMPARAMOS, PODEMOS ACTUALIZAR EL DIBUJO SOLAMENTE CUANDO 
        //HA CAMBIADO props (20)
        console.log("Old props: " + oldProps.iddepartamento);
        console.log("Current props: " + this.props.iddepartamento);
        //SOLAMENTE ACTUALIZAREMOS CUANDO PROPS HA CAMBIADO DE VALOR
        if (oldProps.iddepartamento != this.props.iddepartamento){
            this.loadEmpleados();
        }
    }

  render() {
    return (
      <div>
        <h3 style={{color:"red"}}>
            Empleados Component {this.props.iddepartamento}
        </h3>
        <table border="1">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.empleados.map((empleado, index) => {
                        return (<tr key={index}>
                            <td>{empleado.apellido}</td>
                            <td>{empleado.oficio}</td>
                            <td>{empleado.departamento}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )

  }
}

