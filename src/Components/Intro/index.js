import React from "react";

export function Intro({ name, occupation, description, networks }) {
  return (
    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">{name}</h1>
        <h3>
          I'm a <span>{occupation}</span>, {description}.
        </h3>
        <hr />
        <ul className="social">{networks}</ul>
      </div>
    </div>
  );
}
