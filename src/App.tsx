import { useState } from 'react'
import './App.css'
import UpperSwitch from './components/UpperSwitch'
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
  const [theme, setTheme] = useState<0|1|2>(0)
  const [dataToDisplay, setDataToDisplay] = useState("0")
  const divClasses = ["container-1", "container-2", "container-3"]
  
  return (
    <div className={`${divClasses[theme]}`}>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <UpperSwitch setTheme={setTheme}></UpperSwitch>
        <Display dataToDisplay={dataToDisplay}></Display>
        <Buttons setDataToDisplay={setDataToDisplay}></Buttons>
      </div>
    </div>
  )
}

export default App
