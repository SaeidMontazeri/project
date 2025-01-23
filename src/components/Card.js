import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
function Card(props) {
  const [width, setWidth] = useState(27);
  const [height, setHeight] = useState(300);
  const [price, setPrice] = useState(props.price);
  function Add() {
    setPrice(price + 1);
  }
  function Mines() {
    setPrice(price - 1);
  }
  return (
    <div className="card col-4" style={{ width: `${width}rem` }}>
      <img
        src={props.src}
        className="card-img-top"
        alt={props.name}
        height={props.height}
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ textAlign: "center", width: "100%" }}
        >
          {props.name}
        </h5>
        <p className="card-text" style={{ textAlign: "center", width: "100%" }}>
          {price},000 $
        </p>
        <div className="row">
          <div className="col">
            <button
              onClick={Add}
              className="btn btn-primary"
              style={{ textAlign: "center", width: "100%" }}
            >
              price +
            </button>
          </div>
          <div className="col">
            <button
              onClick={Mines}
              className="btn btn-primary"
              style={{ textAlign: "center", width: "100%" }}
            >
              price -
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              onClick={() => {
                setWidth(width + 1);
                setHeight(height + 10);
              }}
              className="btn btn-primary"
              style={{
                textAlign: "center",
                width: "100%",
                backgroundColor: "green",
              }}
            >
              size +
            </button>
          </div>
          <div className="col">
            <button
              onClick={() => {
                setWidth(width - 1);
                setHeight(height - 10);
              }}
              className="btn btn-primary"
              style={{
                textAlign: "center",
                width: "100%",
                backgroundColor: "red",
              }}
            >
              size -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
