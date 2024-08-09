import React from "react";
import './StatsPoke.css'


function StatsPoke( data ){

    console.log(data)

    const hp = data.dados.stats[0].base_stat
    const atk = data.dados.stats[1].base_stat
    const def = data.dados.stats[2].base_stat
    const stak = data.dados.stats[3].base_stat
    const sdef = data.dados.stats[4].base_stat
    const speed = data.dados.stats[5].base_stat



    return(
        <section className="StatsPoke">
            <div className="interface-stats">
            <div className="info-pokemon">
                <div className="AlturaPoke1">
                    <h1>Altura</h1>
                    <h3>{data.dados.height},0 M</h3>
                </div>

                <div className="AlturaPoke1">
                    <h1>Peso</h1>
                    <h3>{data.dados.weight},0 KG</h3>
                </div>
            </div>

            <h1 className="title-stats">Base Stats</h1>

            <div className="hp alinhar-stats"><span className="stats" >HP |</span><h1>  <span className="barra" style={{width: `${hp/2}cqi`}} >{hp}</span> </h1></div>
            <div className="atk alinhar-stats"><span className="stats" >ATK |</span><h1> <span className="barra" style={{width: `${atk/2}cqi`}}>{atk}</span> </h1></div>
            <div className="def alinhar-stats"><span className="stats" >DEF |</span><h1> <span className="barra" style={{width: `${def/2}cqi`}}>{def}</span> </h1></div>
            <div className="special-atk alinhar-stats"><span className="stats" >SATK |</span><h1> <span className="barra" style={{width: `${stak/2}cqi`}}>{stak}</span> </h1></div>
            <div className="special-def alinhar-stats"><span className="stats" >SPDEF |</span><h1> <span className="barra" style={{width: `${sdef/2}cqi`}}>{sdef}</span> </h1></div>
            <div className="special-def alinhar-stats"><span className="stats" >SPEED |</span><h1> <span className="barra" style={{width: `${speed/2}cqi`}}>{speed}</span> </h1></div>

            </div>
        </section>
    )
}
export default StatsPoke