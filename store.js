import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import reducers
import todos from './reducers/index';

import blogs from './data/blogData';

//objects for default data

const defaultState = {
  blogs
};

const store = createStore(todos, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;