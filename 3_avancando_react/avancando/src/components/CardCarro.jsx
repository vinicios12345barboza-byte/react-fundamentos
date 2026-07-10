
const CardCarro = ({marca, modelo, ano}) => {
  return (
    <div className="car-box">
        <h2>{marca} - {modelo}</h2>
        <p>Ano de fabricação: {ano}</p>
    </div>
  )
}

export default CardCarro