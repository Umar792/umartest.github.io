import React from "react";
import Card from "../Card";
import Sdata from "../Sdata";

function Service() {
  return (
    <>
      <div className="card-heading">
        <h1>Our Services</h1>
      </div>
      <div className="c-card">
        {Sdata.map((val, ind) => {
          return <Card title={val.title} imgsrc={val.imgsrc} key={ind} />;
        })}
      </div>
    </>
  );
}

export default Service;
