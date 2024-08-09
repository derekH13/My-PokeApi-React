import React, { useContext, useEffect } from "react";
import squirtle from '../../img/squirtle.png'

import './Card.css'
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../contexts/AppContext";
import ClickPoke from "../../../pages/ClickPoke/ClickPoke";


function Card({data}){

    const navigate = useNavigate();
    const { CardMostrar, setCardMostrar } = useContext(AppContext)

    if(!data) return



    const handleCardClick = () => {
        // Redireciona para a página ClickPoke e passa o data como estado
        navigate('/ClickPoke', { state: { data } });
      };



      

    return(
        /* From Uiverse.io by reshades */ 
            /* From Uiverse.io by Javierrocadev */ 
        

            <div className={`card-poke  fundo-${data.types[0].type.name}`} onClick={handleCardClick}>
                
                <img src={data.sprites.front_default} alt="" />

                <h1 className="title">{data.name}</h1>
                <h4 className="id">ID: {data.id}</h4>

                <div className="types-pokemon">

                    {
                        data.types.map((data) => {
                        return  <span className={data.type.name}>{data.type.name}</span>
                        })
                    }

                </div>

                <div className="info">
                    <div className="info-altura">
                        <h1 className="altura">Altura</h1>
                        <h3>{data.height},0 M</h3>
                    </div>

                    <div className="info-peso">
                        <h1 className="peso">Peso</h1>
                        <h3>{data.weight},0 KG</h3>
                    </div>
                    
                </div>
                
            </div>

    )
}

export default Card