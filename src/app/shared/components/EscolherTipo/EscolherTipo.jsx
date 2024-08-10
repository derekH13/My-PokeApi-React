import React from "react";
import './EscolherTipo.css'

function EscolherTipo( data ){

    console.log(data)

    return(
        <div className="windown">
            <div className="flex-escolha">
                <div className="quadrado"></div>
                <div className="quadrado"></div>
                <div className="quadrado"></div>
                <div className="quadrado"></div>
            </div>
        </div>
    )
}

export default EscolherTipo