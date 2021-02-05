import React, {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "use-error-boundary/lib/ErrorBoundary";
import { ListType } from "../../redux/reducers/listReducer";
import { RootStateType } from "../../redux/store";
import ErrorIndicator from "../ErrorIndicator/error-indicator";
import Spinner from "../Spinner/spinner";


import "./itemDetails.css";

type ItemPropsType = {
  getItemData: () => void;
  children: any;
  Id:number
};

const ItemDetails: React.FC<ItemPropsType> = ({ Id, getItemData,  children }) => {
  const itemDetails = useSelector<RootStateType, ListType>((state)=>state.item.item)
  const image = useSelector<RootStateType, string | undefined>((state)=>state.item.item.url)
  const loading = useSelector<RootStateType, boolean>((state)=>state.item.loading)
  const error = useSelector<RootStateType, boolean>((state)=>state.item.error)
  useEffect(() => {
    getItemData();

  }, [Id, getItemData])
  let isLoading = loading && <Spinner />
  let isError = error && <ErrorIndicator message='Sorry. Our network is broken' />

  return (
    <div className="person-details card">
      { error ? isError :
     <>
      <img className="person-image" src={image} alt="person-img" />
      <div className="card-body">
        <h4>{itemDetails.name}</h4>
        <ul className="list-group list-group-flush">
          { React.Children.map(children, (child) => {
            return React.cloneElement(child, { itemDetails });
          })}
          {isLoading}
        </ul>
      </div>
      </>  
      }
      
    </div>
  );
};

export default ItemDetails
