import React from "react";
import "./quotest.css";

export const Quotes = ({ name, quote }) => {
  return (
    <>
      <div className="card">
        <p className="text">{quote}</p>
        <h2 className="name">{name}</h2>
      </div>
    </>
  );
};
