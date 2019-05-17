import React from 'react';
import Footer from './common/footer'
import {BrowserRouter,Route} from 'react-router-dom'
import Index from './pages/index'
import My from './pages/my'
import Add from './pages/add'
import Login from './pages/login'
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Footer/>
        <Route path="/" exact component={Index} />
        <Route path="/my" exact component={My} />
        <Route path="/add" exact component={Add} />
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
