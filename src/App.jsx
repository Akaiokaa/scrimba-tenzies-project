import './App.css'
import Die from './components/Die.jsx'
function App() {
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
