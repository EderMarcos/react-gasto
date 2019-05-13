import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

  gasto_name = React.createRef();
  cantidad = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    if (!this.cantidad.current.value || !this.gasto_name.current.value) {
      return;
    }
    const gasto = {
      cantidad: this.cantidad.current.value,
      name: this.gasto_name.current.value
    };
    this.props.onAddGasto(gasto);
    event.currentTarget.reset();
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Agrega tus gastos aqui</h5>

          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label htmlFor="gasto_name">Nombre del gasto</label>
              <input type="text" className="form-control" id="gasto_name" placeholder="Ej. Transporte" ref={ this.gasto_name } />
            </div>
            <div className="form-group">
              <label htmlFor="cantidad">Cantidad</label>
              <input type="text" className="form-control" id="cantidad" placeholder="Ej. 100" ref={ this.cantidad } />
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
          </form>
        </div>
      </div>
    );
  }
}

Formulario.propTypes = {
  onAddGasto: PropTypes.func.isRequired,
}

export default Formulario;
