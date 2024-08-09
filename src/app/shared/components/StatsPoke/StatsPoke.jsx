import React from "react";
import './StatsPoke.css'


function StatsPoke( data ){

    console.log(data)



    return(
        <section className="StatsPoke">
            <div className="interface-stats">
            <div className="info-pokemon">
                <div className="AlturaPoke">
                    <h1>Altura</h1>
                    <h3>{data.dados.height},0 M</h3>
                </div>

                <div className="AlturaPoke">
                    <h1>Peso</h1>
                    <h3>{data.dados.weight},0 KG</h3>
                </div>
            </div>

            <h1 className="title-stats">Base Stats</h1>

            <div className="hp alinhar-stats"><span className="stats" >HP |</span><h1> <span className="barra">2</span> </h1></div>
            <div className="atk alinhar-stats"><span className="stats" >ATK |</span><h1> <span className="barra">2</span> </h1></div>
            <div className="def alinhar-stats"><span className="stats" >DEF |</span><h1> <span className="barra">2</span> </h1></div>
            <div className="special-atk alinhar-stats"><span className="stats" >SATK |</span><h1> <span className="barra">2</span> </h1></div>
            <div className="special-def alinhar-stats"><span className="stats" >SPDEF |</span><h1> <span className="barra">2</span> </h1></div>
            <div className="special-def alinhar-stats"><span className="stats" >SPEED |</span><h1> <span className="barra">2</span> </h1></div>

            </div>
        </section>
    )
}
export default StatsPoke