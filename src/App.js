import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import characters, { Rick } from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px', width: "100%"}}>
      <Nav/>
      <hr />
      <div style={{width:"100%"}}>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
    </div>
  )
}

export default App
