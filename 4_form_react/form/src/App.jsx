import { useState } from 'react'

// 1 - Criação de form
import FormularioCadastro from './components/FormularioCadastro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Form em React</h1>

      <FormularioCadastro userName= "Vinicios" userEmail="vinicios@gmail.com"/>
    </>
  )
}

export default App
