import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
function Gay() {
  const [marginTop, setMarginTop] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);

  return (
    <div style={{ width: 400, height: 400 }}>
      <p>Are you Gay?</p>
      <div className="row">
        <div className="col-2">
          <button
            onClick={() => {
              alert("Why are you gay!!");
            }}
          >
            Yes
          </button>
        </div>
        <div className="col">
          <button
            style={{ marginTop, marginLeft }}
            onMouseMove={() => {
              setMarginLeft(Math.random() * 400);
              setMarginTop(Math.random() * 400);
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
export default Gay;
