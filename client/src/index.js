import {
	React,
	ReactDOM,
	Provider,
	createStore,
	applyMiddleware
} from './modules';

import Routes from './routes';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Routes />
  </Provider>
  , document.querySelector('.container'));
