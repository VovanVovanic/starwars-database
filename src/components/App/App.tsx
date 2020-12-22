import React, { useState } from "react";
import Header from "../Header/header";
import RandomPlanet from "../RandomPlanet/randomPlanet";
import ItemList from "../ItemList/itemList";
import "./app.css";

import SwapiService from "../../services/swapi";
import Row from "../Row/row";
import MyComponent from "./error";
import ItemDetails from "../ItemDetails/itemDetails";

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

const { getPerson, getPlanet, getStarship, getPeopleImage, getPlanetImage, getStarshipImage } = new SwapiService()

type fieldType = 'length' | 'crew' | 'cost_in_credits' | 'eye_color' | 'height' | 'gender' | 'birth_year' | 'population' | 'diameter' | 'rotation_period'
type DetailsPropsType = {
  field: fieldType;
  label: string;
  itemDetails?: ListType;
};
const Details: React.FC<DetailsPropsType> = ({ itemDetails, field, label }) => {
let itemField = itemDetails && itemDetails[field]

  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemField}</span>
    </li>
  );
}
const App = () => {

  const [itemId, setItemId] = useState<number>(3);
  const getData = new SwapiService()

  const onChangeItem = (id: number) => {
    setItemId(id)
  }
  const planets = (
    <ItemList onChangeItem={onChangeItem} getData={getData.getAllPlanets}>
      {(item: ListType) => (
        <span>
          {`${item.name}, (diameter: ${item.diameter} km, population: ${item.population})`}
        </span>
      )}
    </ItemList>
  );
  const persons = (
    <ItemList onChangeItem={onChangeItem} getData={getData.getAllPeople}>
      {(item: ListType) => `${item.name}, (date of birth: ${item.birth_year}, gender: ${item.gender})`}
    </ItemList>
  );
  // const person = <ItemDetails Id={3} />;
  // const person2 = <ItemDetails Id={6} />;
  const starships = (
    <ItemList onChangeItem={onChangeItem} getData={getData.getAllStarShips}>
      {(item: ListType) =>
        `${item.name}, (lenght: ${item.length} m. crew: ${item.crew} person)`
      }
    </ItemList>
  );
  return (
    <div>
      <Header />
      <RandomPlanet />
      {/* <Row left={person} right={person2} /> */}
      <ItemDetails Id={9} getItemData={getPerson} getImageUrl={getPeopleImage}>
        <Details field={"eye_color"} label={"Eye color:"} />
        <Details field={"gender"} label={"Gender:"} />
        <Details field={"height"} label={"Height:"} />
        <Details field={"birth_year"} label={"Birth Year:"} />
      </ItemDetails>
      <ItemDetails Id={7} getItemData={getPlanet} getImageUrl={getPlanetImage}>
        <Details field={"diameter"} label={"Diameter:"} />
        <Details field={"rotation_period"} label={"Rotation Period:"} />
        <Details field={"population"} label={"Population:"} />
      </ItemDetails>
      <ItemDetails
        Id={5}
        getItemData={getStarship}
        getImageUrl={getStarshipImage}>
        <Details field={"crew"} label={"Crew:"} />
        <Details field={'length'} label={"Length: "} />
        <Details field={'cost_in_credits'} label={"Price:"} /> 
      </ItemDetails>
      <hr></hr>
      {/* <Row left={planets} right={person} />
      <hr />
      <Row left={starships} right={person} /> */}
    </div>
  );
};

export default App;
