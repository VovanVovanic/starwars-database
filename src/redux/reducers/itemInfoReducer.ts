import { ItemActionType } from "../actions/itemInfo";
import { GET_ITEM, ON_ITEM_ERROR } from "../types";
import { ListType } from "./listReducer";

type  InfoStateType = typeof initState
const initState = {
  item: {} as ListType,
  loading: true,
  error: false
} 

export const itemInfoReducer = (state: InfoStateType = initState, action: ItemActionType): InfoStateType => {
  switch (action.type) {
    case GET_ITEM:
      return { ...state, loading: false, item: action.item, error: false }
    case ON_ITEM_ERROR:
     return {...state, loading:false, error:true} 
    default: return state
  }
}