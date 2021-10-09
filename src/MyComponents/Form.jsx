import React, { useState } from "react";

export default function Form() {
  let sdata = {
    fullname: "",
    email: "",
    phone: "",
    message: "",
  };
  let [cdata, SetData] = useState(sdata);
  const OnSubmits = (event) => {
    event.preventDefault();
    console.log(cdata);
    alert(
      `Your Name: ${cdata.fullname} \n Your Email: ${cdata.email} \n Your Phone: ${cdata.phone} \n Your Message: ${cdata.message} `
    );
  };
  let InputEvent = (event) => {
    SetData({ ...cdata, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="text-center my-5">
        <h1>Contact US</h1>
      </div>
      <form onSubmit={OnSubmits}>
        <div className="form-group">
          <label for="FormControlInput1">Full Name</label>
          <input
            name="fullname"
            onChange={InputEvent}
            type="text"
            className="form-control"
            id="FormControlInput1"
            placeholder="Enter Your Name"
            value={cdata.fullname}
          />
        </div>
        <div className="form-group">
          <label for="FormControlInput2">Email address</label>
          <input
            name="email"
            onChange={InputEvent}
            type="email"
            className="form-control"
            id="FormControlInput1"
            placeholder="name@example.com"
            value={cdata.email}
          />
        </div>
        <div className="form-group">
          <label for="FormControlInput3">Phone Number</label>
          <input
            name="phone"
            onChange={InputEvent}
            type="tel"
            className="form-control"
            id="FormControlInput1"
            placeholder="Enter Your Mobile"
            value={cdata.phone}
          />
        </div>
        <div className="form-group">
          <label for="FormControlTextarea1">Message</label>
          <textarea
            name="message"
            onChange={InputEvent}
            className="form-control"
            id="FormControlTextarea1"
            rows="3"
            value={cdata.message}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </form>
    </>
  );
}
