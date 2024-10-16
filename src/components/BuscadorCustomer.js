import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class BuscadorCustomer extends Component {
    urlApi = Global.urlApiCustomers;
    cajaId = React.createRef();
    state = {
        customer: null
    }

    buscarCustomer = (e) => {
        e.preventDefault();
        //RECUPERAMOS EL VALOR DE LA CAJA
        let idCustomer = this.cajaId.current.value;
        //customers/ALFKI.json
        let request = "customers/" + idCustomer + ".json";
        axios.get(this.urlApi + request).then(response => {
            console.log("Leyendo servicio");
            this.setState({
                customer: response.data.customer
            })
        })
    }

  render() {
    return (
    <div>
        <h1>Buscador Api Customer</h1>
        <form>
            <label>ID Customer:</label>
            <input type="text" ref={this.cajaId}/>
            <button onClick={this.buscarCustomer}>
                Buscar Customer
            </button>
        </form>
        {
            this.state.customer &&
            (<ul>
                <li>Cliente: {this.state.customer.contactName}</li>
                <li>Empresa: {this.state.customer.companyName}</li>
                <li>Puesto: {this.state.customer.contactTitle}</li>
                <li>Ciudad: {this.state.customer.city}</li>
            </ul>)
        }
    </div>
    )
  }
}
