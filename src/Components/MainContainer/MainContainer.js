import React, { Component } from 'react'

import Home from '../Home/Home.js'
import Info from '../Info/Info.js'
import Search from '../Search/Search.js'
import Edit from '../Edit/Edit.js'
import store from "../Redux/Redux.js"

class MainContainer extends Component {
  state = {
    currentComponent: 3
  }
  // Info - Search - Edit

    constructor(props){
      super(props);
      this.state = {currentComponent : 0}
      store.subscribe(() => {
        this.setState({
          currentComponent: store.getState().currentComponent,
        })
        // console.log("wyyyy");
      })
    }


  componentWillMount(){
    store.dispatch({
      type: "SET-ZERO"
    });
  };


  // Info - Search - Edit

  renderComponent = () => {
    switch (this.state.currentComponent) {
      case 0: return <Home />; break;
      case 1: return <Info />; break;
      case 2: return <Search />; break;
      case 3: return <Edit />; break;
    }
  }


  render() {
      return (
        <div>
          {
            this.renderComponent()
          }
        </div>
      )
  }
}

export default MainContainer;
