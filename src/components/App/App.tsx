import React, { useState } from "react";
import Header from "../Header/header";
import RandomPlanet from "../RandomPlanet/randomPlanet"
import "./app.css";
import SwapiService from "../../services/swapi";
import Planets from "../Planets/planets";
import People from "../People/people";
import Starships from "../Starships/starships";
import { Route } from "react-router-dom";

export type PlanetType = {
  id: number
  name: string
  population: string
  rotation_period: string
  diameter: number
};
export type PersonType = {
  id: number
  name: string
  eye_color: string
  height: string
  birth_year: string
  gender: string
};
export type StarshipType = {
  id: number
  name: string
  length: string
  crew: string
  cost_in_credits: string
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
};
export const  getData = new SwapiService();
export const { getPerson, getPlanet, getStarship, getPeopleImage, getPlanetImage, getStarshipImage } = new SwapiService()


const App = () => {

  const [itemId, setItemId] = useState<number>(2);
   
   

  const onChangeItem = (id: number) => {
    setItemId(id)
  }


  return (
    <div>
      <Header />
      <RandomPlanet />

      <Route
        path="/people/"
        render={() => <People onChangeItem={onChangeItem} id={itemId} />}
      />
      <Route
        path="/starships"
        render={() => <Starships onChangeItem={onChangeItem} id={itemId} />}
      />
      <Route
        path="/planets"
        render={() => <Planets onChangeItem={onChangeItem} id={itemId} />}
      />
      <Route
        path="/"
        exact
        render={() => <h2 style={{textAlign: 'center', marginTop: '100px'}}>Welcome to star wars data base </h2>}
      />
    </div>
  );
};

export default App;
