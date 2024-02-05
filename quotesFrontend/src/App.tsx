import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainBack from './components/MainBack'
import Container from '@mui/material/Container';
import gun from '../src/assets/gun.jpg'
import { Typography } from '@mui/material'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='page-container'>
        <div className='logo'>
          {/* <img src={gun} alt='Click' className='logo-image'></img> */}
          <Typography variant='body1' className='typo-style'>
            Becuse history is written in blood

          </Typography>
          
       </div>
      <MainBack/>

      </div>
      
    </>
  )
}

export default App
