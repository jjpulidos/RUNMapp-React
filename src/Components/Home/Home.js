import React, {Component} from 'react';
import icon from './Icon.png';
import './Home.css';
import store from "../Redux/Redux.js"


//Components
import Info from '../Info/Info.js'

class Home extends Component {

  changeStateFromHome = () => {
    console.log("Testing");
    store.dispatch({type: "CHANGE-HOME"});
  }

  render() {

    return (<div className="Home">
      <header className="Home-header">
        <img src={icon} className="Home-logo" alt="logo"/>
        <p>
          Bienvenido a RUNMapp, presione comenzar para inciar la experiencia.
        </p>
        <h3 className="Init-button" onClick={this.changeStateFromHome}>
          ¡Comenzar!
        </h3>
      </header>
    </div>);

    return (
      <div className="Home">

        <header className="Home-header">
          <img src={icon} className="Home-logo" alt="logo" />
          <p>
            Bienvenido a RUNMapp, presione comenzar para inciar la experiencia.
          </p>

            <button onClick={this.changeStateFromHome}>
              ¡Comenzar!
            </button>

        </header>

      </div>
    );

  }
}

export default Home;
