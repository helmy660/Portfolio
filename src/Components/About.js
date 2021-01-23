import React from "react";

export function About(props) {
  const name = props.data ? props.data.name : "";
  const profilepic = props.data ? "images/" + props.data.image : "";
  const bio = props.data ? props.data.bio : "";
  const city = props.data ? props.data.address.city : "";
  const state = props.data ? props.data.address.state : "";
  const phone = props.data ? props.data.phone : "";
  const email = props.data ? props.data.email : "";
  const resumeDownload = props.data ? props.data.resumedownload : "";

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="Helmy Profile Pic" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city} {state}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
