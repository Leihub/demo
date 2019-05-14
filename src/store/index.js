import { createStore,applyMiddleware,compose,combineReducers } from 'redux'
import reducer from './reducer'
import sagaMiddleware from 'redux-saga'
import rootSaga from './saga.js';  

const sagaMiddleware = createSagaMiddleware() 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(sagaMiddleware)
))

export default store