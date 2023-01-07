import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Form from './components/Form/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  )
}

export default App
