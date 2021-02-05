import React from 'react'
import { useDispatch } from 'react-redux';
import { getItemInfoThunk } from '../../redux/actions/itemInfo';
import { getItemsThunk } from '../../redux/actions/items';
import { ListType } from '../../redux/reducers/listReducer';
import Details from '../Details/details';
import ItemDetails from '../ItemDetails/itemDetails';
import ItemList from '../ItemList/itemList';
import { Ptype } from '../Planets/planets'
import Row from '../Row/row';

const Starships: React.FC<Ptype> = ({ onChangeItem, id }) => {

  const dispatch = useDispatch();
    const getS = () => {
      dispatch(getItemsThunk("starships"));
  };
    const getInfo = () => {
      dispatch(getItemInfoThunk("starship", id));
    };
    const starships = (
      <ItemList onChangeItem={onChangeItem} getData={getS}>
        {(item: ListType) =>
          `${item.name}, (lenght: ${item.length} m. crew: ${item.crew} person)`
        }
      </ItemList>
    );
  const starshipDetails = (
    <ItemDetails
      Id={id}
      getItemData={getInfo}
    
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