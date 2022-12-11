import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Btn = styled.button`
  border: #000000 solid;
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

const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 5% 5% 40% 35% 13% 2%;
  grid-template-rows: 10% 55% 8% 10% 2% 2% 11% 2%;
  background-color: #ffffff;
  width: 14.5em;
  height: 19em;
  border-radius: 0.4em;
  border: solid #ffffff 0.1em;
  box-shadow: 0px 0px 0.3em 0.2em #ffffff90;
  margin: 0.5em;
`;
const DivElement = styled.div`
  grid-column-start: ${(props) => props.gridColumnStart || 1};
  grid-column-end: ${(props) => props.gridColumnEnd || 1};
  grid-row-start: ${(props) => props.gridRowStart || 1};
  grid-row-end: ${(props) => props.gridRowEnd || 1};
  color: ${(props) => props.textColor || "black"};
  justify-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const location = useLocation();

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  }

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <DivGrid>
      <DivElement
        gridColumnStart={1}
        gridColumnEnd={2}
        gridRowStart={1}
        gridRowEnd={2}
      >
        {isFav ? (
          <button  onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button  onClick={handleFavorite}>
            🤍
          </button>
        )}
      </DivElement>
      <DivElement
        gridColumnStart={5}
        gridColumnEnd={7}
        gridRowStart={1}
        gridRowEnd={2}
      >
        <Btn
          onClick={() => {
            props.onClose(props.id);
          }}
        >
          X
        </Btn>
      </DivElement>
      <DivElement
        gridColumnStart={1}
        gridColumnEnd={7}
        gridRowStart={2}
        gridRowEnd={6}
      >
        <Img src={props.image} alt="image not found" />
      </DivElement>
      <DivElement
        gridColumnStart={2}
        gridColumnEnd={5}
        gridRowStart={4}
        gridRowEnd={5}
        textColor="white"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Link to={`/detail/${props.id}`}>
            <span style={{ backgroundColor: "#505050C0", padding: "0.5em" }}>
              {props.name}
            </span>
          </Link>
        </div>
      </DivElement>
      <DivElement
        gridColumnStart={1}
        gridColumnEnd={4}
        gridRowStart={7}
        gridRowEnd={8}
      >
        {props.gender}
      </DivElement>
      <DivElement
        gridColumnStart={4}
        gridColumnEnd={8}
        gridRowStart={7}
        gridRowEnd={8}
      >
        {props.species}
      </DivElement>
    </DivGrid>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (id) => dispatch(addFavorite(id)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
