import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <NavLink to={props.btnlink} className="btn btn-outline-dark">
            {props.btntext}
          </NavLink>
        </div>
      </div>
    </>
  );
}
