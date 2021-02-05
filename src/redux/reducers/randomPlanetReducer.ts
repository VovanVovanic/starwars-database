import { RandomPlanetActionType } from "../actions/randomPlanet"
import { CHANGE_RANDOM_PLANET, RANDOM_ERROR } from "../types"



export type PlanetType = {
  id: number
  name: string
  population: string
  rotation_period: string
  diameter: number
}

type RandomPlanetStateType = typeof initState

const initState = {
  planetInfo: {
    id: 0,
    name: '',
    population: '',
    rotation_period: '',
    diameter: 0,
  } as PlanetType,
  loading: true,
  error: false
}

export const randomPlanetReducer = (state: RandomPlanetStateType = initState, action:RandomPlanetActionType ): RandomPlanetStateType => {
  switch (action.type) {
    case CHANGE_RANDOM_PLANET:
      return {
        ...state,
        planetInfo: action.planet,
        loading: false,
      }
    case RANDOM_ERROR:
      return{...state, error:true, loading:false}
    default: return state
  }
}