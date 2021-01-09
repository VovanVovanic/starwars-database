import React from 'react'
import { getData, getStarship, getStarshipImage, ListType } from '../App/App';
import Details from '../Details/details';
import ItemDetails from '../ItemDetails/itemDetails';
import ItemList from '../ItemList/itemList';
import { Ptype } from '../Planets/planets'
import Row from '../Row/row';

const Starships: React.FC<Ptype> = ({ onChangeItem, id }) => {
    const starships = (
      <ItemList onChangeItem={onChangeItem} getData={getData.getAllStarShips}>
        {(item: ListType) =>
          `${item.name}, (lenght: ${item.length} m. crew: ${item.crew} person)`
        }
      </ItemList>
    );
  const starshipDetails = (
    <ItemDetails
      Id={id}
      getItemData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Details field={"crew"} label={"Crew:"} />
      <Details field={"length"} label={"Length: "} />
      <Details field={"cost_in_credits"} label={"Price:"} />
    </ItemDetails>
  );
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Starships</h2>
      <Row left={starships} right={starshipDetails} />
    </>
  );
}
export default Starships