import React, { useContext, useEffect, useState } from "react";
import './TiposPokemon.css'
import AppContext from "../../contexts/AppContext";

// =========== imagem

import tipo1 from '../../img/icone/tipo (1).png'
import tipo2 from '../../img/icone/tipo (2).png'
import tipo3 from '../../img/icone/tipo (3).png'
import tipo4 from '../../img/icone/tipo (4).png'
import tipo5 from '../../img/icone/tipo (5).png'
import tipo6 from '../../img/icone/tipo (6).png'
import tipo7 from '../../img/icone/tipo (7).png'
import tipo8 from '../../img/icone/tipo (8).png'
import tipo9 from '../../img/icone/tipo (9).png'
import tipo10 from '../../img/icone/tipo (10).png'
import tipo11 from '../../img/icone/tipo (11).png'
import tipo12 from '../../img/icone/tipo (12).png'
import Util from "../../Util/Util";





function TiposPokemon(){


    const {arrayTipo, setArrayTipo, setLoading} = useContext(AppContext)
    const [tipo, setTipo] = useState('fire')



//sempre que o tipo mudar declare ele
useEffect(() => {
    setLoading(true)

    Util.buscarTipo(tipo).then(data => {
        setArrayTipo(data)

        setLoading(false)
    })
}, [tipo])




    return(
        <div className="container-Tipos-poke">
            <div className="Tipos-poke">
                <img src={tipo1} value={tipo} alt="1M" onClick={() => setTipo('psychic')} />
                <img src={tipo2}  alt="1M" onClick={() => setTipo('dark')}/>
                <img src={tipo3} alt="1M" onClick={() => setTipo('grass')}/>
                <img src={tipo4} alt="1M" onClick={() => setTipo('bug')}/>
                <img src={tipo5} alt="1M" onClick={() => setTipo('flying')}/>
                <img src={tipo6} alt="1M" onClick={() => setTipo('normal')}/>
                <img src={tipo7} alt="1M" onClick={() => setTipo('water')}/>
                <img src={tipo8} alt="1M" onClick={() => setTipo('dragon')}/>
                <img src={tipo9} alt="1M" onClick={() => setTipo('ghost')}/>
                <img src={tipo10} alt="1M" onClick={() => setTipo('poison')}/>
                <img src={tipo11} alt="1M" onClick={() => setTipo('fire')}/>
                <img src={tipo12} alt="1M" onClick={() => setTipo('ice')}/>
            </div>
     </div>
    )
}

export default TiposPokemon