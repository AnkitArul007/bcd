import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState("")
  const [paraArray, setParaArray] = useState([])

  return (
    <>
      <h4>Hello user whats your name?</h4>
      <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" name="name" id="name" placeholder='Enter your name here'/>
      <button type="button" onClick={(e)=>{
        setParaArray([...paraArray, username])
        setUsername("")
      }}>Enter</button>

      {paraArray.map((ele, id)=>{
        return(
          <p key={id}>{ele}</p>
        )
      })}
    </>
  )
}

export default App
