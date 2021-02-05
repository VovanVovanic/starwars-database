
import { ListActionType } from "../actions/items";
import { LIST_ERROR, GET_LIST} from "../types";



export type PersonType = {
  id: number
  name: string
  eye_color: string
  height: string
  birth_year: string
  gender: string
};

export type ListType = {
  id: number;
  name: string;
  length?: string;
  crew?: string;
  cost_in_credits?: string;
  eye_color?: string;
  height?: string;
  birth_year?: string;
  gender?: string;
  population?: string;
  rotation_period?: string;
  diameter?: number;
  url?: string
};

type ListReducerType = typeof initState
const initState = {
  items: [] as Array<ListType>,
  loading: true,
  error: false
}
export const listReducer = (state: ListReducerType = initState, action: ListActionType): ListReducerType => {
  switch (action.type) {
    case GET_LIST:
    return{...state,  loading:false, error:false, items: action.items}  
    case LIST_ERROR:
    return{...state, error:true, loading:false}

    default: return state
  }
}