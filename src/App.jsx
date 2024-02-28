import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("Krishna");
  const [chart,setChart] = useState([{name:"User1",message:"message1"}])

  return (
    <div>
      <h1>User: {name}</h1>
      <div className="chart-container">
      {chart.map(c=><div className={`container ${c.name ===name ?'me': ''}`}>
       <p className='chart-box'>
          <strong>{c.name}:</strong>
          <span>{c.message}</span>
        </p>
          </div>)}
       
      </div>
      <div className="send">
      <input type="text" placeholder='Enter your chart'/>
      <button>Submit</button>
      </div>
    </div>
  )
}

export default App
