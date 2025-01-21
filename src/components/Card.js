import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
function Card(props) {
  const [price, setPrice] = useState(props.price);
  function Add() {
    setPrice(price + 1);
  }
  function Mines() {
    setPrice(price - 1);
  }
  return (
    <div class="card col-4" style={{ width: "27rem" }}>
      <img src={props.src} class="card-img-top" alt={props.name} height={300} />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center", width: "100%" }}>
          {props.name}
        </h5>
        <p class="card-text" style={{ textAlign: "center", width: "100%" }}>
          {price},000 $
        </p>
        <div className="row">
          <div className="col">
          <button
            onClick={Add}
            className="btn btn-primary"
            style={{ textAlign: "center", width: "100%" }}
          >
            +
          </button>
          </div>
          <div className="col">
          <button
            onClick={Mines}
            className="btn btn-primary"
            style={{ textAlign: "center", width: "100%" }}
          >
            -
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
