import React, { useState } from "react";
import Header from "../Header/header";
import RandomPlanet from "../RandomPlanet/randomPlanet"
import "./app.css";
import Planets from "../Planets/planets";
import People from "../People/people";
import Starships from "../Starships/starships";
import { Route } from "react-router-dom";



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
