import React from 'react'
import { useDispatch } from 'react-redux';
import { getItemInfoThunk } from '../../redux/actions/itemInfo';
import { getItemsThunk } from '../../redux/actions/items';
import { ListType } from '../../redux/reducers/listReducer';
import Details from '../Details/details';
import ItemDetails from '../ItemDetails/itemDetails';
import ItemList from '../ItemList/itemList';
import { Ptype } from '../Planets/planets'
import Row from '../Row/row'

const People: React.FC<Ptype> = ({ onChangeItem, id }) => {
const dispatch = useDispatch()
  const getP = () => {
  dispatch(getItemsThunk("people")); 
  }
  const getInfo = () => {
    dispatch(getItemInfoThunk('person', id))
  }
    const persons = (
      <ItemList onChangeItem={onChangeItem} getData={getP}>
        {(item: ListType) =>
          `${item.name}, (date of birth: ${item.birth_year}, gender: ${item.gender})`
        }
      </ItemList>
    );
  const personDetails = (
    <ItemDetails Id={id} getItemData={getInfo}>
      <Details field={"eye_color"} label={"Eye color:"} />
      <Details field={"gender"} label={"Gender:"} />
      <Details field={"height"} label={"Height:"} />
      <Details field={"birth_year"} label={"Birth Year:"} />
    </ItemDetails>
  );
  return (
    <>
      <h2 style={{textAlign: "center", marginBottom:'50px' }}>Persons</h2>
    <Row
      left={persons}
      right ={personDetails}
      />
      </>
  )
}
export default People