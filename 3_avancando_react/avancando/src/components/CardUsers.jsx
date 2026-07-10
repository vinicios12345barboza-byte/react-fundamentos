
// 7 - Props
const CardUsers = ({name, profissao, age}) => {
  return (
    <div className="card">
        <h3>Desenvolvedor: {name}</h3>
        <h3>Profissão: {profissao}</h3>
        <p>Idade: {age}</p>

    </div>
  )
}

export default CardUsers