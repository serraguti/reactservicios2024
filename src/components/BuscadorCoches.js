import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class BuscadorCoches extends Component {
    cajaMarca = React.createRef();

    buscarCoches = (e) => {
        e.preventDefault();
        let marca = this.cajaMarca.current.value;
        // var cochesFiltrados = [];
        // for (var car of this.state.coches){
        //     if (marca == car.marca){
        //         //TENEMOS COCHE FILTRADO
        //         cochesFiltrados.push(car);
        //         console.log(car);
        //     }
        // }
        //TENEMOS UN METODO DENTRO DE ARRAY QUE NOS PERMITE BUSCAR POR ALGUNA 
        //PROPIEDAD DE LOS OBJETOS UTILIZANDO LAMBDA
        //Array.filter(objetoArray => objetoArray.Propiedad == valor);
        var cochesFiltrados = 
            this.cochesAll.filter
            (car => car.marca.toLowerCase().includes(marca.toLowerCase()));
        this.setState({
            cochesDibujo: cochesFiltrados
        })
    }

    //TODOS LOS COCHES AL LEER DEL SERVICIO
    cochesAll = [];

    state = {
        cochesDibujo: []
    }

    reloadDibujo = (e) => {
        e.preventDefault();
        this.setState({
            cochesDibujo: this.cochesAll
        })
    }

    loadCoches = () => {
        var request = "/webresources/coches";
        var url = Global.urlApiCoches + request;
        axios.get(url).then(response => {
           this.cochesAll = response.data;
            this.setState({
                cochesDibujo: this.cochesAll
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }
  render() {
    return (
      <div>
        <h1>Buscador Coches</h1>
        <form>
            <label>Introduzca marca</label>
            <input type="text" ref={this.cajaMarca}/>
            <button onClick={this.buscarCoches}>
                Buscar coches
            </button>
            <button onClick={this.reloadDibujo}>
                Recargar coches
            </button>            
        </form>
        <table border="1" className="table table-dark">
            <thead>
                <tr>
                    <th>Coche</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.cochesDibujo.map((car, index) => {
                        return (<tr key={index}>
                            <td>{car.marca} {car.modelo}</td>
                            <td>{car.conductor}</td>
                            <td>
                                <img src={car.imagen} 
                                style={{width: "150px", height: "150px"}}/>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
