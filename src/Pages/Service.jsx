import React from "react";
import Card from "../MyComponents/Card";
import Sdata from "../MyComponents/Sdata";
export default function Service() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="service_grid">
              {Sdata.map((val) => {
                return (
                  <Card
                    key={val.key}
                    img={val.img}
                    title={val.title}
                    text={val.text}
                    btntext={val.btntext}
                    btnlink={val.btnlink}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
