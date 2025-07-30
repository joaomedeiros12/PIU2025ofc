import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlbunsPorUser from './componentes/UserIdList'
import AlbunsPorUserApi from './componentes/UserApiId'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AlbunsPorUser />
      <AlbunsPorUserApi />
    </>
  )
}

export default App
