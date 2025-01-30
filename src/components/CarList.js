import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";


function CarList(props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setShow(!show)
      }
      }>click</button>

      {
      show && (<ul>
          {
            props.cars.map(car => (
              <li>{car.name}</li>
            ))
          }
        </ul>
      )}
    </div>
  );
}
export default CarList;
