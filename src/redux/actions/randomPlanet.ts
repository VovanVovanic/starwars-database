import { Dispatch } from "redux"
import SwapiService from "../../services/swapi"
import { PlanetType } from "../reducers/randomPlanetReducer"
import { CHANGE_RANDOM_PLANET, RANDOM_ERROR} from "../types"

export type RandomPlanetActionType = ReturnType<typeof onRandomPlanet> | ReturnType<typeof onError>

export const onRandomPlanet = (planet: PlanetType) => {
  return {
    type: CHANGE_RANDOM_PLANET,
    planet
  }as const
}

export const onError = () => {
  return {
    type: RANDOM_ERROR
  }as const
}

export const getRandomPlanet = (dispatch: Dispatch) => {
     new SwapiService().getPlanet(Math.floor(Math.random() * 25 + 2))
       .then((planet) => {
         dispatch(onRandomPlanet(planet))
    })
       .catch((error) => {
      dispatch(onError())
    })
}