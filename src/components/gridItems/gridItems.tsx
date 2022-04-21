import React from "react";
import {GridItemsProps} from "../../models"


const GridItems: React.FC<GridItemsProps> = props => {
  return (
    <ul>
    {props.items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
  );
};

export default GridItems;
