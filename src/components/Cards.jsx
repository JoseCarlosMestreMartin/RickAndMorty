import Card from "./Card";
import styled from "styled-components";

const Div = styled.div`
border 0.1em solid #00FF00;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 100%;

`;

export default function Cards(props) {
  const { characters } = props;
  return (
    <Div>
      {characters.map((e) => (
        <Card
          id={e.id}
          onClose={props.onClose}
          name={e.name}
          species={e.species}
          gender={e.gender}
          image={e.image}
        />
      ))}
    </Div>
  );
}
