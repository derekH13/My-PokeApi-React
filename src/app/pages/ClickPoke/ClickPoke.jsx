import React, { useContext, useEffect } from "react";
import './ClickPoke.css'
import NavBar from "../../shared/components/NavBar/NavBar";
import ClickPokeImage from "../../shared/components/ClickPokeImage/ClickPokeImage";
import StatsPoke from "../../shared/components/StatsPoke/StatsPoke";
import Provider from "../../shared/contexts/Provider";
import AppContext from "../../shared/contexts/AppContext";
import { useLocation } from "react-router-dom";
import NavBarMobille from "../../shared/components/NavBarMobille/NavBarMobille";








function ClickPoke(){
    
    const location = useLocation();
    const { data } = location.state || {};  // Pega o data passado

    return(
        <Provider>
        <div className="clickcard">
        
        
            <NavBar />

            <ClickPokeImage dados={data}/>

            <StatsPoke dados={data}/>

            
        </div>
        </Provider>
   
    )
}

export default ClickPoke