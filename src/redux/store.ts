import { applyMiddleware } from 'redux';
import {combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { itemInfoReducer } from './reducers/itemInfoReducer';
import { listReducer } from './reducers/listReducer';
import { randomPlanetReducer } from './reducers/randomPlanetReducer';
const rootReducer = combineReducers({
  random: randomPlanetReducer,
  list:listReducer,
  item: itemInfoReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof rootReducer>