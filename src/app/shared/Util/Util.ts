import {pokeDados} from './../Interface/dadosPoke'





class Util{

static async requisicao(pesquisa: string): Promise<pokeDados | undefined>{
    try{
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`)

        if(!response.ok){
            throw new Error('requisição não efetuada' + response.status)
        }
        
        const result: pokeDados = await response.json();

      return result

    }catch(error){
        console.error(`rejeitado ${error}`)
    }
}

}


export default Util