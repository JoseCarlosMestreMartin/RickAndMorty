import Card from "./Card";
import styled from "styled-components"

const Div = styled.div`
border 0.3em solid #555;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 100%;

`

export default function Cards(props) {
  const { characters } = props;
  return (
    <Div>
      {
        characters.map(e => 
        <Card 
         name={e.name}
         species={e.species}
         gender={e.gender}
         image={e.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
          />
         )
      }
    </Div>
  );
}
