import { applyMiddleware, compose, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import rootReducer from './reducerCombiner';

const createComposeEnhancers = () => {
  const newCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  if (process.env.NODE_ENV === 'development') {
    return newCompose;
  }
  return compose;
};

const configureStore = () => {
  const middlewares = [thunk];
  const composeEnhancers = createComposeEnhancers();
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};

const user = localStorage.getItem('user');
if (user) {
  axios.defaults.headers.common['Authorization'] = JSON.parse(user).token;
}

export default configureStore;
