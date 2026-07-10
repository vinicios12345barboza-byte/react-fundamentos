import { useState } from "react"

const PainelSistema = () => {
    const [logado, setLogado] = useState(true);
  return (
    <div>
        {logado ? (
            <h1>Bem vindo ao painel secreto</h1>
        ) : (
            <h1>Faça login!</h1>
        )}
    </div>
  
  )
}

export default PainelSistema;