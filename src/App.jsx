import './App.css'
import Die from './components/Die.jsx'
function App() {
  function generateAllNewDice(){
    const newDice = []
    for(let i = 0; i < 10; i++){
      const rand = Math.ceil(Math.random() * 6)
      newDice.push(rand)
    }
    return newDice
  }
  console.log(generateAllNewDice())
  return (
    <>
    <main className='die-container'>
      <div className='box'>
        <div className='first-row'>
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
        <div className='second-row'>
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
      </div>
      
    </main>
    </>
  )
}

export default App
