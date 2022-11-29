import React from "react";

import SearchBar from "./SearchBar";


export default function Nav(props) {
    return (
        <div style= {{ border: "solid 0.1em red", backgroundColor: "#0000FF50", width: "100%", display: "flex", flexDirection:"row", justifyContent:"flex-end", alignItems: "center" }}>
            <SearchBar/>
        </div>
    );
}