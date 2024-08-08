import React from "react";
import squirtle from '../../img/squirtle.png'

import './Card.css'

function Card(){
    return(
        /* From Uiverse.io by reshades */ 
            /* From Uiverse.io by Javierrocadev */ 
        <div className="card-poke">
            <img src={squirtle} alt="" />

            <h1 className="title">Charmander</h1>
            <h4 className="id">ID: 115624255</h4>

            <div className="types-pokemon">
                <span className="fire">Fire</span>
                <span className="water">Water</span>
            </div>

            <div className="info">
                <div className="info-altura">
                    <h1 className="altura">Altura</h1>
                    <h3>11,4</h3>
                </div>

                <div className="info-peso">
                    <h1 className="peso">Peso</h1>
                    <h3>41,4</h3>
                </div>
                
            </div>
        </div>
    )
}

export default Card