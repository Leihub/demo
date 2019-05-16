import React from 'react';
import Footer from './common/footer'
import Index from './pages/index'
import {Router, Route, Link} from 'react-router'
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
