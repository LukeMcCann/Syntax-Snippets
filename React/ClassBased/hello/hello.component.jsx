import React from "react";
import "./hello.styles.css";

export const Hello = (props) => (
  <div className="Hello">
    <h1>Hello {props.toWho}</h1>
  </div>
);
