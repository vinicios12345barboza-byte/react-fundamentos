import { use, useState } from "react"

const FormularioCadastro = ({userName, userEmail}) => {
    const [nome, setNome] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [senha, setSenha] = useState("")
    const [bio, setBio] = useState("")

    const [role, setRole] = useState("")

    const lidarComEnvio = (e) =>{
        e.preventDefault();
        
        setNome("");
        setEmail("");
        setSenha("");
        setBio("");
        setRole("");
    }

     console.log(nome,email,senha,bio, role);
     //1 - criação de form 
     // 3 - gerenciamento de dados
     // 5 - envio de formulário 
     // 7 - limpar o form  
  return (

      <>
    <form onSubmit={lidarComEnvio}>
        <label htmlFor="campoNome">Nome completo:</label>

        <input 
        type="text"
        id="campoNome"
        // 6 - controlled inputs
        value={nome}
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
        />
        

        {/* 2 - label envolvendo input */}
        <label>
            <span>Email:</span>
            <input 
            type="text" 
            name="email" 
            placeholder="Digite seu email" 
            value={email || ""} 
            // 4 - simplificando manipulação
            onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
            <span>Senha:</span>
            <input 
            type="password" 
            placeholder="Digite sua senha" 
            value={senha} 
            // 4 - simplificando manipulação
            onChange={(e) => setSenha(e.target.value)}/>
        </label>
        {/* 8 - textarea */}
        <label>
            <span>Bio</span>
            <textarea 
            name="bio" 
            placeholder="Descrição do usuário" 
            onChange={(e) => setBio(e.target.value)}
            value={bio}
                ></textarea>
        </label>
        {/*  9 - select */}
        <label>
            <span>Escolha uma linguagem</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="javascript">Javascript</option>
                <option value="python">Python</option>
                <option value="ruby">Ruby</option>
            </select>
        </label>

        <button type="submit">Cadastrar usuário</button>
    </form>
    </>
  )
}

export default FormularioCadastro