





class Util{

static async requisicao(pesquisa){
    
    try{
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa}/`)

        if(!response.ok){
            throw new Error('requisição não efetuada' + response.status)
        }
        
        const result= await response.json();

      return result

    }catch(error){
        console.error(`rejeitado ${error}`)
    }
}


static async reuisicaoTipo(pesquisa){
    
    try{
       const response = await fetch(`https://pokeapi.co/api/v2/type/${pesquisa}/`)

        if(!response.ok){
            throw new Error('requisição não efetuada' + response.status)
        }
        
        const result = await response.json();
      return result.pokemon

    }catch(error){
        console.error(`rejeitado ${error}`)
    }
}


static async buscarTipo(pesquisa) {
    const result = await Util.reuisicaoTipo(pesquisa);
    if (!result) return;

    let data= []; // Initialize data as an empty array

    for (let i = 0; i < 20; i++) {
        if (result[i] && result[i].pokemon && result[i].pokemon.name) {
            const pokemonData = await Util.requisicao(result[i].pokemon.name);
            if (pokemonData) {
                data.push(pokemonData); // Add each fetched Pokémon data to the array
            }
        }
    }

    return data.length > 0 ? data : undefined; // Return the array if it has elements
}

}

export default Util