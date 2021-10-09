import React from "react";

export default function Footer(props) {
  return (
    <>
      <div className="footer-container bg-light text-center mt-5">
        <small>{props.text}</small>
      </div>
    </>
  );
}
