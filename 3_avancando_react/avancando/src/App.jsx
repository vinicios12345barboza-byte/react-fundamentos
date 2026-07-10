import { useState } from 'react'
import './App.css'

// 2 - imagem em assets
import messi2 from './assets/messi2.jpg'

// 3 - useState
import Data from './components/Data'

// 4 - renderização de list
import ListRender from './components/ListRender'

// 5 - render com key
import PainelDevs from './components/PainelDevs'

// 6 - renderização condiconal
import PainelSistema from './components/PainelSistema'
import CardUsers from './components/CardUsers'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Avançando em React!</h1>
     {/*1 - imagem em public*/}
     <img src="/messi.jpg" alt="Anão" />
     {/*2 - imagem em assets */}
     <img src={messi2} alt="anao" />
     {/* 3 - useState */}
     <Data />
     {/* 4 - render de listas */}
     <ListRender />
     {/* 5 - render com key */}
     <PainelDevs />

     {/* 6 - renderização condicional */}
     <PainelSistema />

    {/* 7 - props */}
     <h2>Lista de funcionarios</h2>
     <CardUsers name="Vinicios" profissao="Backend" />
     <CardUsers name="Vini" profissao="Dev" />
    </>
  )
}

export default App
