import React from "react";
import Cardproduct from "./Cardproduct";
import "./css/Productslist.css";

export default function Productslist({ groupedProducts, selectedLetter }) {
  return (
    <div className="products--list">
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
      <Cardproduct />
    </div>
  );
}
