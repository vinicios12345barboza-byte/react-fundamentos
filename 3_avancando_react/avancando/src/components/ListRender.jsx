import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Vinicios", "Bianco", "Franca"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Vinicios", age: 19},
        {id: 2, name: "Pqp", age: 29},
        {id: 3, name: "Vins", age: 32},
    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) =>  
          prevUsers.filter((user) => randomNumber !== user.id)
        );
    }

  return <div>
    {/* 4- render sem key */}
    <ul>
        {list.map((item) =>(
            <li>{item}</li>
        ))}
    </ul>
    {/* 5 - render com key */}
    <ul>
        {users.map((user) =>(
            <li key={user.id}>
                {user.name} - {user.age}
            </li>
        ))}
    </ul>
    {/* 6 - previous state */}
    <button onClick={deleteRandom}>Delete random user</button>
  </div>
  
}

export default ListRender