import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPlanet } from "../../redux/actions/randomPlanet";
import { PlanetType } from "../../redux/reducers/randomPlanetReducer";
import { RootStateType } from "../../redux/store";
import ErrorIndicator from "../ErrorIndicator/error-indicator";
import Spinner from "../Spinner/spinner";
import "./randomPlanet.css";

const RandomPlanet = () => {
  const dispatch = useDispatch();

  const planet = useSelector<RootStateType, PlanetType>(
    (state) => state.random.planetInfo
  );
  const loading = useSelector<RootStateType, boolean>(
    (state) => state.random.loading
  );
  const error = useSelector<RootStateType, boolean>(
    (state) => state.random.error
  );

  useEffect(() => {
    let interval = setInterval(() => {
      dispatch(getRandomPlanet);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isPlanetLoaded = loading ? <Spinner /> : "";
  const isError = error ? (
    <ErrorIndicator message={"Something gonna wrong"} />
  ) : (
    ""
  );
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
