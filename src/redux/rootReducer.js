import {combineReducers} from 'redux';
import searchTypeReducer from './SearchType/reducers';
import mapReducer from './Map/reducers';

const appReducer = combineReducers({
  searchTypeReducer,
  mapReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'DELETE_STATE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
