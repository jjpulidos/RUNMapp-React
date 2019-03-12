import React, { Component } from 'react';
import addEvent from './AddEvent.svg';
import './Info.css';
import store from "../Redux/Redux.js"

class App extends Component {

  changeStateFromInfo = () => {
    console.log("Testing");
    store.dispatch({
      type: "CHANGE-INFO"
    });
  }

  changeStateBackFromInfo = () => {
    console.log("Testing");
    store.dispatch({
      type: "CHANGE-BACK-INFO"
    });
  }

  render() {
    return (
      <div className="Info">
        <header className="Info-header">
          <p>
            ¿Qué puedes hacer con  RUNMapp?
          </p>
          <div className="Feature-wrapper">
            <img src={addEvent} className="Info-logo" alt="logo"/>
          </div>
          <p>
            Agregar eventos
          </p>
          <div className="Description-info">
            <p> Piensa en un evento genial, crealo y hazle saber a todos.</p>
          </div>
          <br/><br/>
          <div className="Buttons-wrapper">
            <div className="Feature-buttons" onClick={this.changeStateBackFromInfo}> Anterior </div>
            <div className="Feature-buttons" onClick={this.changeStateFromInfo}> Siguiente </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
