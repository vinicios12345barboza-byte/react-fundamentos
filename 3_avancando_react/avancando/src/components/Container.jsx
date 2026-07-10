// 10 - children
const Container = ({children}) => {
  return (
    <div className="exemplo">
        <h1>Conteudo do componente pai:</h1>
        {children}
    </div>
  )
}

export default Container