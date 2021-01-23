import React from "react";
import { Intro } from "./Intro";
import { NavBar } from "./NavBar";

export function Header(props) {
  const name = props.data ? props.data.name : "";
  const occupation = props.data ? props.data.occupation : "";
  const description = props.data ? props.data.description : "";
  const networks = props.data
    ? props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      })
    : null;

  return (
    <header id="home">
      <NavBar />
      <Intro name={name} occupation={occupation} description={description} networks={networks} />
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}
