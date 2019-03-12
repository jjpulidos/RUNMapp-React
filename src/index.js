import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';


//Components
import Form from './Components/Form/Form.js'

import store from "./Components/Redux/Redux.js"

//Components
import App from './App'
import MainUI from './Components/MainUI/MainUI.js'
import Support from './Components/Support/Support.js'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      <Route exact path='/runmapp' component={MainUI}/>
      <Route exact path='/form' component={Form}/>
      <Route path='/supp' component={Support}/>
    </div>
  </Router>
  </Provider>
  ,document.getElementById('root'));
serviceWorker.unregister();
