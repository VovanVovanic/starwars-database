import React, { useEffect } from "react";
import Spinner from "../Spinner/spinner";
import "./itemList.css";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import ErrorIndicator from "../ErrorIndicator/error-indicator";
import { ListType } from "../../redux/reducers/listReducer";


type ListPropsType = {
  onChangeItem: (id: number) => void;
  getData: () => void;
  children: (item: ListType) => React.ReactNode;
};

const ItemList: React.FC<ListPropsType> = ({onChangeItem,getData,children}) => {
 

  const itemList = useSelector<RootStateType, Array<ListType>>((state) => state.list.items)
  const loading = useSelector<RootStateType, boolean>((state)=> state.list.loading)
  const error = useSelector<RootStateType, boolean>((state) => state.list.error)
  
  useEffect(() => {
    getData()
  }, []);

  const items = itemList.map((el) => {
    let info = children(el);
    return (
      <li
        key={el.name}
        className="list-group-item"
        onClick={() => onChangeItem(el.id)}
      >
        {info}
      </li>
    );
  });

  let isLoaded = loading && <Spinner /> 
  return (
    <ul className="item-list list-group">
      {error ? (
        <ErrorIndicator message={"we can get item list for some reasons"} />
      ): items}
      {isLoaded}
    </ul>
  );
};
export default ItemList

