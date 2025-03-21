function Card({ pokemon }) {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png";
    return (
        <>
            <div className="poke-card">
                <h2>#{pokemon.id}: {pokemon.name}</h2>
                <img src={imgUrl} alt={pokemon.name} />
            </div>
        </>)
}
function Container({ pokemons }) {

    // Nos quedamos con los 10 primeros:
    const pokeArr = pokemons.slice(0, 10);

    return (
        <>
        {pokeArr && <div className="container">
            {/* 
                Renderizado condicional con operador &&
                solo si el pokeArr existe aparece el bucle
            */}
            {
                pokeArr && pokeArr.map((pokemon) => {
                    // Añadimos un key diferente en cada elemento
                    // usando el id de cada pokemon:
                    return (
                        <div key={pokemon.id}>
                            <Card pokemon={pokemon} />
                        </div>
                    )
                })
            }
        </div>}
        {
            !pokeArr.length && (<p>No hay datos</p>)
        }
        </>
    )
}

export default Container;