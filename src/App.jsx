import './App.css'
import Die from './components/Die.jsx'
import {useState} from 'react'
function App() {
  const [dice, setDice] = useState(generateAllNewDice)

  function generateAllNewDice(){
    const newDice = []

    for(let i = 0; i < 10; i++){
      const rand = Math.ceil(Math.random() * 6)
      newDice.push({
        id: i,
        randomNumber: rand,
        isHeld: false
      })
    }

    return newDice
  }

  function hold(id){
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.id === id ?
          {...die, isHeld: !die.isHeld} :
          die
      })
    })
  }

  function rollDice(){
    setDice(generateAllNewDice)
  }

  return (
    <>
    <main className='die-container'>
      <div className='dice-box'>
        { dice.map((diceObj) => (
          <Die 
            key={diceObj.id} 
            value={diceObj.randomNumber} 
            isHeld={diceObj.isHeld}
            hold={hold}
            id={diceObj.id}
          />
        )) 
        }
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
    </>
  )
}

export default App
