import { ThunkAction } from "redux-thunk"
import SwapiService from "../../services/swapi"
import { ListType } from "../reducers/listReducer"
import { RootStateType } from "../store"
import { GET_ITEM, ON_ITEM_ERROR } from "../types"

export type ItemActionType = ReturnType<typeof onGetItem> | ReturnType<typeof onItemError>

export const onGetItem = (item: ListType) => {
 
  return { type: GET_ITEM, item } as const
  
}

export const onItemError = () => {
  return {type:ON_ITEM_ERROR}as const 
}

export const getItemInfoThunk = (type: string, id: number): ThunkAction<void, RootStateType, unknown, ItemActionType> => {
   
  return (dispatch) => {
    const swapi = new SwapiService()
    switch (type) {
      case 'person': {
        swapi.getPerson(id)
          .then((person) => {
           let url= swapi.getPeopleImage(id)
            let personInfo = { ...person, url}
            dispatch(onGetItem(personInfo))
          }).catch(()=>dispatch(onItemError()))
        break
      }

      case 'planet': {
        swapi.getPlanet(id)
          .then((planet) => {
            let url= swapi.getPlanetImage(id)
            let planetInfo = {...planet, url}
            dispatch(onGetItem(planetInfo))
          }).catch(()=>dispatch(onItemError()))
        break
      }
        case 'starship': {
        swapi.getStarship(id)
          .then((ship) => {
            let url= swapi.getStarshipImage(id)
            let shipInfo = {...ship, url}
            dispatch(onGetItem(shipInfo))

          }).catch(()=>dispatch(onItemError()))
        break
      }

    }
  }
}