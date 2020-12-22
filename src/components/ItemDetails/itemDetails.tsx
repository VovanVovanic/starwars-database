import React, {useEffect, useState } from "react";
import { ListType } from "../App/App";

import "./itemDetails.css";

type ItemPropsType = {
  Id: number;
  getItemData: (id: number) => Promise<ListType>;
  getImageUrl: (id: number) => string;
  children: any;
};

const ItemDetails: React.FC<ItemPropsType> = ({ Id, getItemData, getImageUrl, children }) => {
  const [itemDetails, setItemDetails] = useState<ListType>({} as ListType)
  const [image, setImage] = useState<string | undefined>()
 

  useEffect(() => {
    getItemData(Id).then((details) => setItemDetails(details));
    setImage(getImageUrl(Id))
  }, [Id])
  return (
    <div className="person-details card">
      {image !== undefined ? <img className="person-image" src={image} alt="person-img"/> : 'The image is missing'}

      <div className="card-body">
        <h4>{itemDetails.name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child) => {
            return React.cloneElement(child, {itemDetails})
          })
          }
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails
