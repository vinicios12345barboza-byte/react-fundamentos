
// 7 - Props
const CardUsers = ({name, profissao}) => {
  return (
    <div className="card">
        <h3>Desenvolvedor: {name}</h3>
        <h3>Profissão: {profissao}</h3>

    </div>
  )
}

export default CardUsers