import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let { id } = useParams();
  // Todo: If item not found, redirect to home
  
  return (
    <>
      <h3>Product: {id}</h3>
    </>
  );
};

export default Product;
