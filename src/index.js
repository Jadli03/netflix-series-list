import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { Data } from "./Data";
import './index.css';

const ncard = (val, i) => {
  return (
  <Card
   key={i}
  imgsrc={val.imgsrc} 
  name={val.name} 
  link={val.link} 
  />
  );
};

ReactDOM.render(
  <>
    <h1 className="heading"> List of Netflix Series </h1>
    { Data.map(ncard) }

  </>,
  document.getElementById("root")
);
