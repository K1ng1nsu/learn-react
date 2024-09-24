import { useState } from 'react'
import './App.css'
import Clock from './component/Clock'

function App() {
  const [formatString, setFormatString] = useState("HH:mm:ss")

  return (
    <>

      <Clock formatString={formatString} />
    </>
  )
}

export default App
