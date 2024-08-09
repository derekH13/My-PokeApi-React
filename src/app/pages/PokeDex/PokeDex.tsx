
import NavBar from "../../shared/components/NavBar/NavBar";
import Util from '../../shared/Util/Util'

import './PokeDex.css'

// =========== componentes =========================
import InputSearch from "../../shared/components/InputSearch/InputSearch";
import CarouselInfinite from "../../shared/components/CarouselInfinite/CarouselInfinite";
import TiposPokemon from "../../shared/components/TiposPokemon/TiposPokemon";
import Provider from "../../shared/contexts/Provider";
import PokemonDados from "../../shared/components/PokemonDados/PokemonDados";
import Footer from "../../shared/components/Footer/Footer";
import ButtonGrup from "../../shared/components/ButtonGrup/ButtonGrup";
import ClickPoke from "../ClickPoke/ClickPoke";
import NavBarMobille from "../../shared/components/NavBarMobille/NavBarMobille";


export const PokeDex = () => {


    

   




    return(
        <Provider>
            <div id="buscar"></div>
            <NavBar />
            <NavBarMobille />

            <section className="container-PokeDex">
                <div className="interface-90" >
                    <InputSearch />
                    <TiposPokemon />
                </div>

                <PokemonDados />

            </section>
            
            <div className="footer">
                        <ButtonGrup />
                        <Footer />
            </div>

           

            </Provider>    
    );
}

export default PokeDex
