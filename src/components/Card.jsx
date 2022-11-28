import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border: #000000 solid ;
  border-radius: 0.5em;
  height: 1.7em;
  width: 2em;
  background-color: red;
  color: white;
  border-width: 0.1em;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 0.1em;
  
`;
const Div = styled.div`
  background-color: #FFFFFF;
  border: solid #06d6a0;
  font-family: rick_and_morty;
  width: 25em;
  height: 32em;
  border-radius: 2em;
  overflow: hidden;
  margin: 2em;
  position: relative;
  box-shadow: 0 0 10px rgba(86, 82, 82, 0.8);
`;
const H2Name = styled.h2`
  position: relative;
  top: -3em;
  z-index: 1;
  background-color: #000000A0;
  color: #FFFFFF;
  font-family: rick_and_morty;
  padding: 0.1em;
`;
const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 5% 5% 40% 35% 13% 2%;
  grid-template-rows: 10% 55% 8% 10% 2% 2% 11% 2%;
  background-color: #FFFFFF; 
  width: 14.5em;
  height: 19em;
  border-radius: 0.4em;
  border: solid #202020;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  
`;
const DivElement = styled.div`
 background-color: ${props => props.bColor || "#00000000"};
 grid-column-start: ${props => props.gridColumnStart || 1};
 grid-column-end: ${props => props.gridColumnEnd || 1};
 grid-row-start: ${props => props.gridRowStart || 1};
 grid-row-end: ${props => props.gridRowEnd || 1};
 color: ${props => props.textColor || "black"};
 justify-items: center;
 display: flex;
 align-items: center;
 justify-content: center;
 `;

export default function Card(props) {
  return (
    <DivGrid>
      <DivElement gridColumnStart={5} gridColumnEnd={7} gridRowStart={1} gridRowEnd={2}>
      <Btn onClick={props.onClose}>X</Btn>
      </DivElement>
      <DivElement gridColumnStart={1} gridColumnEnd={7} gridRowStart={2} gridRowEnd={6}>
      <Img src={props.image} alt="image not found" />
      </DivElement>
      <DivElement gridColumnStart={2} gridColumnEnd={4} gridRowStart={4} gridRowEnd={5} bColor="#505050C0" textColor="white">
      {props.name}
      </DivElement>
      <DivElement gridColumnStart={1} gridColumnEnd={4} gridRowStart={7} gridRowEnd={8}>
      {props.gender}
      </DivElement>
      <DivElement gridColumnStart={4} gridColumnEnd={8} gridRowStart={7} gridRowEnd={8}>
      {props.species}
      </DivElement>
    </DivGrid>
  );
}
