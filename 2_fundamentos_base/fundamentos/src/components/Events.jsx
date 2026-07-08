// 6 - eventos
const Events = () => {

    const handleClick = (e) =>{
        console.log(e);
        console.log("Executando");
    }

// 8 - função de renderização
    const renderSomething = (x) =>{
        if (x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando outra coisa!</h1>
        }
    };

    // return 10 > 2 && <p>carregando...</p>

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando evento")}>Clique em mim</button>
        </div>
        {/* 7 - eventos com função */}
        <div>
            <button onClick={handleClick}>Clique aqui com função</button>
        </div>
        {/* 8 - rederização */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events