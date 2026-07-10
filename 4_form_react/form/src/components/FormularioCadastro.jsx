import { useState } from "react"

const FormularioCadastro = () => {
    const [nome, setNome] = useState("");

    const lidarComEnvio = (e) =>{
        e.preventDefault();
        console.log(`Enviando o nome pro backend de forma assíncrona: ${nome}`);
    }
  return (
    // 1 - criação de form
    <>
    <form onSubmit={lidarComEnvio}>
        <label htmlFor="campoNome">Nome completo:</label>

        <input 
        type="text"
        id="campoNome"
        value={nome}
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
        />
        

        {/* 2 - label envolvendo input */}
        <label>
            <span>Email:</span>
            <input type="text" name="email" placeholder="Digite seu email" />
        </label>

        <button type="submit">Cadastrar usuário</button>
    </form>
    </>
  )
}

export default FormularioCadastro