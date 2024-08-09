import React, { useContext, useEffect } from "react";
import './ClickPokeImage.css'



function ClickPokeImage( data ){

console.log(data)


    return(
        <div className={`ClickPokeImage fundo-${data.dados.types[0].type.name}`}>
            <img src={data.dados.sprites.front_default} alt="" />

            <h1>{data.dados.name}</h1>

            <h3>ID: {data.dados.id}</h3>

            <div className="types-pokemon1">

            {
                        data.dados.types.map((data) => {
                        return  <span className={data.type.name}>{data.type.name}</span>
                        })
                    }

            </div>
        </div>
    )
}

export default ClickPokeImage