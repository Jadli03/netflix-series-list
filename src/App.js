import React from "react";
import Card from "./Card";
import { Data } from "./Data";

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

const App = () => {
  return (
    <>
      <h1 className="heading"> List of Netflix Series </h1>
      {Data.map(ncard)}
    </>
  );
};

export default App;
