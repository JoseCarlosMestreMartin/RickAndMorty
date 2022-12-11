import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";

export default function Nav(props) {
  return (
    <div
      style={{
        border: "solid 0.1em red",
        backgroundColor: "#0000FF50",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Link to={"/home"}> Home </Link>
      <Link to={"/about"}> About </Link>
      <Link to={"/favorites"}> Favoritos </Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
