import React from 'react'
import { ListType } from '../../redux/reducers/listReducer';

type fieldType =
  | "length"
  | "crew"
  | "cost_in_credits"
  | "eye_color"
  | "height"
  | "gender"
  | "birth_year"
  | "population"
  | "diameter"
  | "rotation_period";
  
type DetailsPropsType = {
  field: fieldType;
  label: string;
  itemDetails?: ListType;
};

const Details: React.FC<DetailsPropsType> = ({ itemDetails, field, label }) => {
  let itemField = itemDetails && itemDetails[field];

  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemField}</span>
    </li>
  );
};
export default Details