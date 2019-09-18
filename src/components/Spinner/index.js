import React from "react";
import "./spinner.css";

const Spinner = ({ white = false }) => (
  <div className={`lds-ellipsis ${white && "white"}`}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Spinner;
