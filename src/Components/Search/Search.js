import React, { Component } from 'react';
import searchEvent from './SearchEvent.svg';
import './Search.css';
import store from "../Redux/Redux.js"

class App extends Component {


  changeStateFromSearch = () => {
    console.log("Testing");
    store.dispatch({
      type: "CHANGE-SEARCH"
    });
  }

  changeStateBackFromSearch = () => {
    console.log("Testing");
    store.dispatch({
      type: "CHANGE-BACK-SEARCH"
    });
  }

  render() {
    return (
      <div className="Search">
        <header className="Search-header">
          <p>
            ¿Qué puedes hacer con RUNMapp?
          </p>
          <div className="Feature-wrapper">
            <img src={searchEvent} className="Search-logo" alt="logo"/>
          </div>
          <p>
            Buscar eventos
          </p>
          <div className="Description-info">
            <p> ¿Buscas algún evento en especifico?  Encuentralo rapidamente con RUNMapp!</p>
          </div>
          <br/><br/>
          <div className="Buttons-wrapper">
              <div className="Feature-buttons-search" onClick={this.changeStateBackFromSearch}> Anterior </div>
              <div className="Feature-buttons-search" onClick={this.changeStateFromSearch}> Siguiente </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
