import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }

    generarTablaMultiplicar = () => {
        let aux = [];
        let num = parseInt(this.props.numero);
        for (var i = 1; i <= 10; i++){
            var operacion = num * i;
            aux.push(operacion);
        }
        this.setState({
            tabla: aux
        })
    }

    // componentDidUpdate = (oldProps) => {
    //     if (oldProps.numero != this.props.numero){
    //         this.generarTablaMultiplicar();
    //     }
    // }

    componentDidMount = () => {
        this.generarTablaMultiplicar();
    }
  render() {
    return (
    <div>
        <h1>Tabla Multiplicar Rutas</h1>
        <h3 style={{color:"blue"}}>
            Número: {this.props.numero}
        </h3>
        <ul>
            {
                this.state.tabla.map((numero, index) => {
                    return (<li key={index}>{numero}</li>)
                })
            }
        </ul>
    </div>
    )
  }
}

