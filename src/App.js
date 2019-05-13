import React, { Component } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import Listado from './components/Listado/Listado';

class App extends Component {

  state = {
    presupuesto: 0,
    restante: 0,
    gastos: []
  } 

  componentDidMount() {
    this.getPresupuesto();

  }

  getPresupuesto = () => {
    let presupuesto = parseInt(prompt('Ingrese el presupuesto: ', 0), 10);
    if (!presupuesto) this.getPresupuesto();
    this.setState({ presupuesto, restante: presupuesto }); 
  }

  newGasto = ({ cantidad, name }) => {
    let { restante, gastos } = this.state;
    gastos.push({ cantidad, name });
    restante = restante - cantidad;
    this.setState({ gastos, restante });
  }

  render() {
    const { presupuesto, restante, gastos } = this.state;
    return (
      <div className="container">
        <div className="row q">
          <div className="col-12 my-4">
            <Header />
          </div>
          <div className="col-lg-6 mb-4">
            <Formulario onAddGasto = { this.newGasto }/>
          </div>
          <div className="col-lg-6 mb-4">
            <Listado presupuesto = { presupuesto } restante = { restante } gastos = { gastos } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
