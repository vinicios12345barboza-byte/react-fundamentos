// 8 - renderização de listas com componentes
import CardCarro from "./CardCarro";

const ListaCarros = () => {
    const bancoDeDadosCarros = [
        {id: 1, marca: "Hyundai", modelo: "Creta", ano: 2025},
        {id: 2, marca: "VW", modelo: "Nivus", ano: 2023},
        {id: 3, marca: "Porsher", modelo: "911", ano: 2026},
    ];

  return (
    <div className="vitrine">
        {bancoDeDadosCarros.map((car) =>(
            <CardCarro 
            key={car.id}
            marca={car.marca}
            modelo={car.modelo}
            ano={car.ano}
            />
        ))}
    </div>
  )
}

export default ListaCarros