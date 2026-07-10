// 11 - funcoes em props
const BotaoDeletar = ({quandoClicar}) => {
  return (
    <button onClick={quandoClicar}>
        Apagar registro
    </button>
  )
}

export default BotaoDeletar