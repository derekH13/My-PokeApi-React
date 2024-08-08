import { log } from "console";
import { useState } from "react";
import NavBar from "../../shared/components/NavBar/NavBar";
import Util from '../../shared/Util/Util'

import './PokeDex.css'

// =========== componentes =========================
import InputSearch from "../../shared/components/InputSearch/InputSearch";
import CarouselInfinite from "../../shared/components/CarouselInfinite/CarouselInfinite";
import TiposPokemon from "../../shared/components/TiposPokemon/TiposPokemon";
import Provider from "../../shared/contexts/Provider";
import PokemonDados from "../../shared/components/PokemonDados/PokemonDados";


export const PokeDex = () => {


    

   




    return(
        <Provider>

            <NavBar />

            <section className="container-PokeDex">
                <div className="interface-90">
                    <InputSearch />
                    <TiposPokemon />
                </div>

                <PokemonDados />

            </section>
            

            </Provider>
    );
}

export default PokeDex
