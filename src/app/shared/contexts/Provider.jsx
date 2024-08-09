import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from 'prop-types'


//esse arquivo Provider é o componente que vai prover as informações


//pega todos os filhos de componentes que queremos em um contexto
function Provider({children}) {

const [PokeDados, setPokeDados] = useState([])
const [loading, setLoading] = useState(true)
const [TipoPokemon, setTipoPokemon] = useState([])
const [arrayTipo, setArrayTipo] = useState([])
const [CardMostrar, setCardMostrar] = useState('')




    //essas variaveis são passadas para o Context
    const value = {
        PokeDados, 
        setPokeDados,
        loading,
        setLoading,
        TipoPokemon, 
        setTipoPokemon,
        arrayTipo, 
        setArrayTipo,
        CardMostrar, 
        setCardMostrar,

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