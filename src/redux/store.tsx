// (1) import module dari `redux`
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

// (2) import redux-thunk middleware
import thunk from "redux-thunk";

// (3) buat composer enhancer untuk menghubungkan dengan Chrome DevTools Redux
// const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import stateProducts from './reducer/products'
import loading from './reducer/loading'
import stateCategories from './reducer/category'

// (4) gabung reducer, untuk sementara kosong, karena kita belum membuat reducer
const rootReducers = combineReducers({
  stateProducts,
  loading,
  stateCategories
});

// (5) buat store, dan gunakan composerEnhancer + middleware thunk
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk))
);

// (6) export store
export default store;