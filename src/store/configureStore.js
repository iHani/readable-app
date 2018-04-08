import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer, commentsReducer, categoriesReducer } from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      comments: commentsReducer,
      categories: categoriesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  console.log('store.getState', store.getState());
  return store;
};
