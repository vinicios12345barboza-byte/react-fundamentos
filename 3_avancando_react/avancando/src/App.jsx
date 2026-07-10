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

// 7 - props
import CardUsers from './components/CardUsers'

// 8 - renderização de listas com componentes
import ListaCarros from './components/ListaCarros'

// 9 - fragment
import Fragment from './components/Fragment'

// 10 - children
import Container from './components/Container'

// 11 - funcão em prop
import PainelAdmin from './components/PainelAdmin'

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
     <CardUsers name="Vinicios" profissao="Backend" age={19} />
     <CardUsers name="Vini" profissao="Dev" age={20} />

    {/* 8 - renderização de listas com componentes  */}
     <ListaCarros />

     {/* 9 - fragment */}
     <Fragment />

     {/* 10 - children */}
     <Container>
      <h2>Aviso importante!</h2>
      <p>Servidor em manutenção às 22h!</p>
     </Container>

     <Container>
      <button>Usando o memo container</button>
     </Container>

     {/* 11 - funçao em prop */}
     <PainelAdmin />
    </>
  )
}

export default App
