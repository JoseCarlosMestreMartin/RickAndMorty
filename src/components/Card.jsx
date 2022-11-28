import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border: #06d6a0 solid;
  border-radius: 0.5em;
  height: 80%;
  width: 80%;
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
  grid-template-columns: 5% 5% 40% 40% 5% 5%;
  grid-template-rows: 17% 40% 20% 5% 18%;
  background-color: #50505050; 
  width: 14.5em;
  height: 19em;
  border-radius: 0.4em;
  border: solid #202020;
  
`;
const DivElement = styled.div`
 background-color: ${props => props.color};
 border: solid #000050;
 grid-column-start: ${props => props.gridColumnStart || 1};
 grid-column-end: ${props => props.gridColumnEnd || 1};
 grid-row-start: ${props => props.gridRowStart || 1};
 grid-row-end: ${props => props.gridRowEnd || 1};
 justify-items: center;
 display: flex;
 align-items: center;
 justify-content: center;
`;

export default function Card(props) {
  return (
    <DivGrid>
      
      
      <H2Name>{props.name}</H2Name>
      <H2Name>{props.species}</H2Name>
      <H2Name>{props.gender}</H2Name>
      <DivElement gridColumnStart={5} gridColumnEnd={7} gridRowStart={1} gridRowEnd={2} color="red">
      <Btn onClick={props.onClose}>X</Btn>
      </DivElement>
      <DivElement gridColumnStart={1} gridColumnEnd={7} gridRowStart={2} gridRowEnd={4} color="blue">
      <Img src={props.image} alt="image not found" />
      </DivElement>
    </DivGrid>
  );
}
