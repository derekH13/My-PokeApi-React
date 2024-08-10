import React, { useContext, useEffect, useState } from "react";

import './PokemonDados.css'
import AppContext from "../../contexts/AppContext";
import Card from "../Card/Card";
import Util from "../../Util/Util";
import Loading from "../Loading/Loading";

function PokemonDados(){

const { PokeDados, setPokeDados, setLoading, loading,  arrayTipo } = useContext(AppContext)
const [ arrayBuscaTipo, setArrayBuscaTipo] = useState([])

useEffect(() => {


    Util.requisicao('275').then(data => {
        setPokeDados(data)
        console.log('d')

        setLoading(false)

    })


}, [])









    return(

        //asim que o Loading for false mostrar o grid/result
        (loading ? <Loading /> : <div className="grid">
        {
           <Card data={PokeDados} key={PokeDados.id} />           
        }
        {
            arrayTipo.map((data) => <Card data={data} key={data.id} />)

        }

        </div>)





    )
}

export default PokemonDados