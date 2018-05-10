import { createStore, combineReducers } from 'redux';
import postsReducer from '../reducers/posts';

// Configures the redux store
export default () => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    combineReducers({
      posts: postsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  return store;
};

