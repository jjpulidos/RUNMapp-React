import React, { Component } from 'react';
import editEvent from './EditEvent.svg';
import './Edit.css';
import store from "../Redux/Redux.js"
import {withRouter} from "react-router-dom"

class App extends Component {

  changeStateFromEdit = () => {
    this.props.history.push("/runmapp");
  }

  changeStateBackFromEdit = () => {
    console.log("Testing");
    store.dispatch({
      type: "CHANGE-BACK-EDIT"
    });
  }

  render() {
    return (
      <div className="Edit">
        <header className="Edit-header">
          <p>
            ¿Qué puedes hacer con RUNMapp?
          </p>
          <div className="Feature-wrapper">
            <img src={editEvent} className="Edit-logo" alt="logo"/>
          </div>
          <p>
            Editar eventos
          </p>
          <div className="Description-info">
            <p> Manten todo actualizado y evita errores editando la información de tus eventos.</p>
          </div>
          <br/><br/>
          <div className="Buttons-wrapper">
              <div className="Feature-buttons-edit" onClick={this.changeStateBackFromEdit}> Anterior </div>
              <div className="Feature-buttons-edit" onClick={this.changeStateFromEdit}> ¡Pruebalo! </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(App);
