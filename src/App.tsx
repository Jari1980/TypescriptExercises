import { useState } from 'react'
import './App.css'
import Exercise1 from './Exercise1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Exercise1 />
      </div>
    </>
  )
}

export default App
