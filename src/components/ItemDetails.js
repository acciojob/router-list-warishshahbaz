import { useParams } from "react-router-dom";
import React from "react";

const ItemDetail = ({ items }) => {
  const { id } = useParams();
  const selectedItem = items.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h2>Item Detail</h2>
      {selectedItem && (
        <div>
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.description}</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
