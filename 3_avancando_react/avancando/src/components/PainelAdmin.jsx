import { useState } from "react"
import BotaoDeletar from "./BotaoDeletar";
const PainelAdmin = () => {
    const [status, setStatus] = useState("Ativo");
    const desativarSistema = () =>{
        setStatus("Desativado")
        console.log("Desligado pelo filho")
    }
  return (
    <div>
    <p>Status atual: {status}</p>
    <BotaoDeletar quandoClicar={desativarSistema} />
    </div>
  )
}

export default PainelAdmin