
export let bigError = false

export default class SwapiService {
  _apiBase = "https://swapi.dev/api/";
  _imageBase = `https://starwars-visualguide.com/assets/img/`;

  getRes = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      bigError = true;
      throw new Error(`An Error appeared. Received ${res.status}`);
    }

    return await res.json();
  };
  getPeopleImage = (id) => {
    return `${this._imageBase}characters/${id}.jpg`;
  };
  getPlanetImage = (id) => {
    return `${this._imageBase}planets/${id}.jpg`;
  };
  getStarshipImage = (id) => {
    return `${this._imageBase}starships/${id}.jpg`;
  };
  getAllPeople = async () => {
    const res = await this.getRes("people");
    return res.results.map(this._transformPerson);
  };
  getPerson = async (id) => {
    const person = await this.getRes(`people/${id}`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getRes("planets");
    return res.results.map(this._transformPlanet);
  };
  getPlanet = async (id) => {
    const planet = await this.getRes(`planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarShips = async () => {
    const res = await this.getRes("starships/");
    return res.results.map(this._transformStarship);
  };
  getStarship = async (id) => {
    const starship = await this.getRes(`starships/${id}`);
    return this._transformStarship(starship);
  };
  _getId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._getId(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotation_period: planet.rotation_period,
    };
  };
  _transformPerson = (person) => {
    return {
      id: this._getId(person),
      name: person.name,
      eye_color: person.eye_color,
      height: person.height,
      birth_year: person.birth_year,
      gender: person.gender,
    };
  };
  _transformStarship = (starship) => {
    return {
      id: this._getId(starship),
      name: starship.name,
      length: starship.length,
      crew: starship.crew,
      cost_in_credits: starship.cost_in_credits,
    };
  };
}
