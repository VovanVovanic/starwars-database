import React, { useEffect } from "react";
import { useState } from "react";
import { ListType } from "../App/App";
import Spinner from "../Spinner/spinner";
import {bigError}from '../../services/swapi'
import "./itemList.css";

type ListPropsType = {
  onChangeItem: (id: number) => void;
  getData: () => Promise<Array<ListType>>;
  children: (item: ListType) => React.ReactNode;
};

const ItemList: React.FC<ListPropsType> = ({
  onChangeItem,
  getData,
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [itemList, setItemList] = useState<Array<ListType>>([]);

  const getItemList = () => {
    getData().then((data: Array<ListType>) => setItemList(data));
  };

  const isError = () => {
    if (bigError === true) {
      throw new Error("An error appeared");
    }
  };
  isError();
  useEffect(() => {
    getItemList();
    setLoading(false);
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

  let isLoaded = loading ? <Spinner /> : items;

  return <ul className="item-list list-group">{isLoaded}</ul>;
};
export default ItemList

