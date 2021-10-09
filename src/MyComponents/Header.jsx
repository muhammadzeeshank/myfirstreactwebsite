import React from "react";
import Image from "../Images/example-25.svg";
import { NavLink } from "react-router-dom";
import "animate.css";

export default function Header(props) {
  let class1 = "";
  let class2 = "";
  if (props.imgonleft === "true") {
    class1 =
      "col-md-6 pt-5 order-2 order-md-2 d-flex flex-column justify-content-center align-items-start animate__animated animate__fadeInUp";
    class2 =
      "col-md-6 pt-5 p-lg-5 order-1 order-md-1 d-flex flex-column justify-content-center";
  } else {
    class1 =
      "col-md-6 pt-5 order-2 order-md-1 d-flex flex-column justify-content-center align-items-start animate__animated animate__fadeInUp";
    class2 =
      "col-md-6 pt-5 p-lg-5 order-1 order-md-2 d-flex flex-column justify-content-center";
  }

  return (
    <>
      <section id="Header" className="d-flex align-items-center">
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className={class1}>
                  <h1 className="mb-3">
                    {props.h1}
                    <strong className="brand_name">{props.brand_name}</strong>
                  </h1>
                  <h2 className="my-3">{props.h2}</h2>
                  <NavLink className="btn btn-outline-dark" to={props.btn_to}>
                    {props.btn_text}
                  </NavLink>
                </div>
                <div className={class2}>
                  <img
                    className="img-fluid animate__animated animate__fadeInUp"
                    src={Image}
                    alt="vector illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
