import './App.css'
import Die from './components/Die.jsx'
import {useState} from 'react'
import Confetti from "react-confetti"

function App() {
  const [dice, setDice] = useState(generateAllNewDice)

  let gameWon = false;

  if(
    dice.every(die => die.isHeld) &&
    dice.every(die => die.randomNumber === dice[0].randomNumber)
  ) {
    gameWon = !gameWon
  }
  
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

  // function hold(id){
  //   setDice(oldDice => {
  //     return oldDice.map(die => {
  //       return die.id === id ?
  //         {...die, isHeld : !die.isHeld} :
  //         die
  //     })
  //   })
  // }
  function hold(id) {
    setDice(oldDice => oldDice.map(die =>
      die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    ))
  }

  function rollDice(){
    setDice(oldDice => oldDice.map(die => 
      die.isHeld ?
        die :
        { ...die, randomNumber: Math.ceil(Math.random() * 6) }
    ))
  }

  function newGame(){
    gameWon = !gameWon
    setDice(generateAllNewDice)
  }

  return (
    <>
    { gameWon && <Confetti /> }
    <div aria-live="polite" className="sr-only">
      {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
    </div>
    <main className='die-container'>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
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
      { gameWon ? <button className="roll-dice" onClick={newGame}>New game</button> : <button className="roll-dice" onClick={rollDice}>Roll</button> }
      
    </main>
    </>
  )
}

export default App
