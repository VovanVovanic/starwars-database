import React, { useEffect, useState } from "react";
import SwapiService from "../../services/swapi";
import { PlanetType } from "../App/App";
import ErrorIndicator from "../ErrorIndicator/error-indicator";
import Spinner from "../Spinner/spinner";
import "./randomPlanet.css";


const RandomPlanet = () => {
  const swapiPlanet = new SwapiService();

  let planetInfo = {
    id: 0,
    name: '',
    population: '',
    rotation_period: '',
    diameter: 0,
  };
  const [planet, setPlanet] = useState<PlanetType>(planetInfo);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const onPlanetLoaded = (planet: PlanetType) => {
    setPlanet(planet);
    setLoading(false);
    setError(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };
  const updatePlanet = () => {
    swapiPlanet
      .getPlanet(Math.floor(Math.random() * 25 + 2))
      .then(onPlanetLoaded)
      .catch(onError);
  };

  useEffect(() => {
    updatePlanet();
    let interval = setInterval(() => {
      updatePlanet();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isPlanetLoaded = loading ? <Spinner /> : "";
  const isError = error ? <ErrorIndicator message={'Something gonna wrong'}/> : "";
  const content = !(loading || error) ? <PlanetView planet={planet} /> : "";

  return (
    <div className="random-planet jumbotron rounded">
      {isError}
      {isPlanetLoaded}
      {content}
    </div>
  );
};

type PlanetViewType = {
  planet: PlanetType;
};
const PlanetView: React.FC<PlanetViewType> = ({ planet }) => {
  const { id, name, population, rotation_period, diameter } = planet;
  let isImage = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  return (
    <>
      <img className="planet-image" src={isImage} alt="planet" />
      <div>
        <h4>Name: {name} </h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotation_period}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default RandomPlanet;


