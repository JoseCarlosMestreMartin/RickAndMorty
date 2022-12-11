import React from "react";
export default function SearchBar(props) {
   const [character, setCharacter] = React.useState("")
   const handleChange = (e) => {
      setCharacter(e.target.value)
   }

   return (
      <div id="input" onChange={handleChange} placeHolder="Ingrese un ID..." style={{border:"solid 0.2em yellow", height:"100%", padding:"1em"}}>
         <input type='search' />
         <button onClick={()=>props.onSearch(character)} style ={{backgroundColor:"#44AA44", border:"solid 0.1em black",borderRadius:"0.3em", margin:"0.5em"}} >Agregar</button>
      </div>
   );
}
