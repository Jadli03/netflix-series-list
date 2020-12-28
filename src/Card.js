import React from "react";
import "./index.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgsrc} alt="card-pic" className="card-img" />
      <div className="card-info">
        <h3 className="card-title"> {props.name} </h3>
        <a href={props.link} target="__blank" >
          <button className="card-btn" > watch now</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
