import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCheckCircle, faTasks, faLaptopCode, faFile } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SideMenu, SideItem, Title, ItemDetails } from "./Style";

export default function SideBar() {
  return (
    <SideMenu>
      <SideItem>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <ItemDetails>
            <FontAwesomeIcon icon={faUserTie} />
            <Title>Home</Title>
          </ItemDetails>
        </Link>
      </SideItem>

      <SideItem>
        <Link to={"/skills"} style={{ textDecoration: "none" }}>
          <ItemDetails>
            <FontAwesomeIcon icon={faLaptopCode} />
            <Title>Skills</Title>
          </ItemDetails>
        </Link>
      </SideItem>

      <SideItem>
        <Link to={"/projects"} style={{ textDecoration: "none" }}>
          <ItemDetails>
            <FontAwesomeIcon icon={faTasks} />
            <Title>Projects</Title>
          </ItemDetails>
        </Link>
      </SideItem>

      <SideItem>
        <Link to={"/courses"} style={{ textDecoration: "none" }}>
          <ItemDetails>
            <FontAwesomeIcon icon={faCheckCircle} />
            <Title>Courses</Title>
          </ItemDetails>
        </Link>
      </SideItem>

      <SideItem>
        <Link to={"/cv"} style={{ textDecoration: "none" }}>
          <ItemDetails>
            <FontAwesomeIcon icon={faFile} />
            <Title>Resume</Title>
          </ItemDetails>
        </Link>
      </SideItem>
    </SideMenu>
  );
}
