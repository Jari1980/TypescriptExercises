import { useState } from 'react'
import './App.css'
import Exercise1 from './Exercise1'
import { Exercise2 } from './Exercise2'
import { Exercise3 } from './Exercise3'
import { Exercise4 } from './Exercise4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Exercise1 />
        <br/>
        <Exercise2 name={'Broccoli'} age={5} />
        <br />
        <Exercise3 />
        <br />
        <Exercise4 />
      </div>
    </>
  )
}

export default App
