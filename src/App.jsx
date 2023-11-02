import { useState, useEffect } from 'react'
import separator from '/pattern-divider-desktop.svg'
import iconDice from '/icon-dice.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const fetchApi = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    setData(data.slip)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <div className='container'>
        <h3>ADVICE # {data.id}</h3>
        <p>"{data.advice}"</p>
        <img src={separator} alt="" />
        <button className='icono' onClick={() => fetchApi()}>
          <img src={iconDice} alt="" />
        </button>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/Alexander-PE">Alexander Perez Encarnacion</a>.
      </div>
    </>
  )
}

export default App
