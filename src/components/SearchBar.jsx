import React from "react";
export default function SearchBar(props) {
   return (
      <div style={{border:"solid 0.2em yellow", height:"100%", padding:"1em"}}>
         <input type='search' />
         <button style ={{backgroundColor:"#44AA44", border:"solid 0.1em black",borderRadius:"0.3em", margin:"0.5em"}} onClick= {()=>props.onSearch("Buscando :)")}>Agregar</button>
      </div>
   );
}
