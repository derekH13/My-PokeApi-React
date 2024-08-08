import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from 'prop-types'


//esse arquivo Provider é o componente que vai prover as informações


//pega todos os filhos de componentes que queremos em um contexto
function Provider({children}) {

    const [valuePokemon, setValuePokemon] = useState("")


    //essas variaveis são passadas para o Context
    const value = {
        valuePokemon,
        setValuePokemon
        }

    return ( 
        //todas as propriedades que for colocada em AppContext.Provider, podera ser acessado por todos os filhos do mesmo
        <AppContext.Provider value={value}>
                {children}
        </AppContext.Provider>
    );
}


export default Provider;

Provider.prototypes = {
    children: propTypes.any,
}.isRequired;