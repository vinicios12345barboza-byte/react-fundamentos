// 4 - template expression

const TemplateExpression = () => {
    const frutas = ["Banana", "Maça", "Uva"]
    const name = "Vinicios"

    const data = {
        age: 19,
        job: "Programador"
    }
  return (
    <div>
        <p>A soma é: {2 + 2}</p>
        <h3>Bem vindo {name}, você tem {data.age} e trabalha como {data.job}</h3>
        <p>{data.age >=18 ? "Maior" : "menor"}</p>
        <p>{frutas[1]}</p>
    </div>
  )
}



export default TemplateExpression