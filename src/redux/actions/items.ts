
import { ThunkAction } from 'redux-thunk';
import SwapiService from '../../services/swapi';
import { ListType, } from "../reducers/listReducer";
import { RootStateType } from '../store';
import {GET_LIST, LIST_ERROR } from "../types";

export type ListActionType = ReturnType<typeof onListGet> | ReturnType<typeof onListError>

export const onListGet = (items: Array<ListType>) => {
  return {
    type: GET_LIST,
    items
  } as const
}
export const onListError = () => {
  return {
    type: LIST_ERROR,
  } as const
}


export const getItemsThunk = (type: string): ThunkAction<void, RootStateType, unknown, ListActionType> => {
  return (dispatch) => {
    const swapi = new SwapiService()
    switch (type) {
      case 'people': {
        swapi.getAllPeople()
          .then((people) => {
            dispatch(onListGet(people))
          }).catch(()=>dispatch(onListError()))
        break
      }

      case 'planets': {
        swapi.getAllPlanets()
          .then((planets) => {
            dispatch(onListGet(planets))
          }).catch(()=>dispatch(onListError()))
        break
      }
        case 'starships': {
        swapi.getAllStarShips()
          .then((ships) => {
            dispatch(onListGet(ships))
          }).catch(()=>dispatch(onListError()))
        break
      }

    }
  }
}