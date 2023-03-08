import { useState } from 'react'
import './App.css'
import BaristaForm from './Components/baristaForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="title-container">
        <h1 className="title">Hello, I would like to order a:</h1>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App;
