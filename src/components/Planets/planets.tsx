import React from 'react'
import { getData, getPlanet, getPlanetImage, ListType } from '../App/App';
import Details from '../Details/details';
import ItemDetails from '../ItemDetails/itemDetails';
import ItemList from '../ItemList/itemList';
import Row from '../Row/row'

export type Ptype = {
  onChangeItem: (id: number) => void
  id: number
}
const Planets: React.FC<Ptype> = ({ onChangeItem, id }) => {

  const planets = (
    <ItemList onChangeItem={onChangeItem} getData={getData.getAllPlanets}>
      {(item: ListType) => (
        <span>
          {`${item.name}, (diameter: ${item.diameter} km, population: ${item.population})`}
        </span>
      )}
    </ItemList>
  );
  const planetDetails = (
    <ItemDetails Id={id}
      getItemData={getPlanet} getImageUrl={getPlanetImage}>
      <Details field={"diameter"} label={"Diameter:"} />
      <Details field={"rotation_period"} label={"Rotation Period:"} />
      <Details field={"population"} label={"Population:"} />
    </ItemDetails>
  );
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Planets</h2>
      <Row left={planets} right={planetDetails} />
    </>
  );
}
export default Planets