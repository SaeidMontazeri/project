import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";

function Form({ darkMode, setDarkMode }) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  function changeUserName(event) {
    setUserName(event.target.value);
  }
  function changePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={changeUserName}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={changePassword}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
      </form>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: darkMode ? "white" : "gray", color: "blue" }}
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}
export default Form;
