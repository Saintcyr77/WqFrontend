import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainBack from './components/MainBack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainBack/>
    </>
  )
}

export default App
