import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Home from './components/custom/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
