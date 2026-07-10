import { useState } from "react"

const PainelDevs = () => {
    const [users, setUsers] = useState([
        {id: 1, name: "Vinicios", profissao: "Backend Developer"},
        {id: 2, name: "Sarah", profissao: "Designer"}
    ]);

    const adicionarDev =() =>{
        const novoDev ={id: Date.now(), name: "Bianco", profissao: "DevOps"}
        setUsers((prevUsers) => [...prevUsers, novoDev]);
    };

  return (
    <div>
        <button onClick={adicionarDev}>Adicionar Dev</button>
        <ul>
            {users.map((u) =>(
                <li key={u.id}>
                    {u.name} - {u.profissao}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PainelDevs