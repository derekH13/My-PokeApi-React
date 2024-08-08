import React, { useContext } from "react";

import './PokemonDados.css'
import AppContext from "../../contexts/AppContext";
import Card from "../Card/Card";

function PokemonDados(){

    const { valuePokemon } = useContext(AppContext)

    return(
        <div className="grid">

        <Card />

        </div>
    )
}

export default PokemonDados