import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Listado extends Component {

  getClass = props => {
    const { presupuesto, restante } = props;
    if (restante < 0) return 'bg-dark text-white';
    if (restante <= presupuesto / 4) return 'bg-danger text-white';
    if (restante <= presupuesto / 2) return 'bg-warning';
    return 'bg-light text-primary';

  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Listado</h5>

          <ul className="list-group list-group-flush">
            {
              this.props.gastos.map(({ name, cantidad }, index) => {
                return (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={ index }>
                  { name } 
                  <span className="badge badge-danger">${ cantidad }</span>
                  </li>
                );
              })
            }
            <li className="list-group-item bg-light text-primary">Prespuesto: ${ this.props.presupuesto }</li>
            <li className={"list-group-item " + this.getClass(this.props)}>Restante: ${ this.props.restante }</li>
          </ul>
        </div>
      </div>
    );
  }
}

Listado.propoTypes = {
  gastos: PropTypes.array.isRequired,
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
}

export default Listado;
