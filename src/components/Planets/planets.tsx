import React from 'react'
import { useDispatch } from 'react-redux';
import { getItemInfoThunk } from '../../redux/actions/itemInfo';
import { getItemsThunk } from '../../redux/actions/items';
import { ListType } from '../../redux/reducers/listReducer';
import Details from '../Details/details';
import ItemDetails from '../ItemDetails/itemDetails';
import ItemList from '../ItemList/itemList';
import Row from '../Row/row'

export type Ptype = {
  onChangeItem: (id: number) => void
  id: number
}
const Planets: React.FC<Ptype> = ({ onChangeItem, id }) => {

  const dispatch = useDispatch();
  const getPl = () => {
    dispatch(getItemsThunk("planets"));
  };
    const getInfo = () => {
      dispatch(getItemInfoThunk("planet", id));
    };
  const planets = (
    <ItemList onChangeItem={onChangeItem} getData={getPl}>
      {(item: ListType) => (
        <span>
          {`${item.name}, (diameter: ${item.diameter} km, population: ${item.population})`}
        </span>
      )}
    </ItemList>
  );  
  const planetDetails = (
    <ItemDetails Id={id}
      getItemData={getInfo}>
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