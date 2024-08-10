// import { Link } from 'react-router-dom'

import './Dashboard.css'

import 'react-toastify/dist/ReactToastify.min.css'

// =================== imagem ====================
import snorlax from '../../shared/img/snorlax.png'
import dormindo from '../../shared/img/domindo.png'
import rare from '../../shared/img/Vector 2.png'
import leite from '../../shared/img/Vector 3.png'
import fruta from '../../shared/img/Vector 4.png'
import limao from '../../shared/img/Lemon.png'


// ========= componentes =============
import NavBar from '../../shared/components/NavBar/NavBar'
import ButtonInicio from '../../shared/components/buttonInicio/ButtonInicio'
import ButtonInicio2 from '../../shared/components/buttonInicio/ButtonInicio2'
import CarouselTipos from '../../shared/components/CarouselTipos/CarouselTipos'
import Footer from '../../shared/components/Footer/Footer'
import ButtonGrup from '../../shared/components/ButtonGrup/ButtonGrup'
import CarouselInfinite from '../../shared/components/CarouselInfinite/CarouselInfinite'
import Provider from '../../shared/contexts/Provider'
import NavBarMobille from '../../shared/components/NavBarMobille/NavBarMobille'
import EscolherTipo from '../../shared/components/EscolherTipo/EscolherTipo'


//aqui é uma pagina
export const Dashboard = () => {

    const verificar = false



    return(
        <Provider>
        <div className='pokemon-informacoes' id='pokeApi'>
            {/* <Link to="/entar">Login</Link> */}
                <NavBar />
                <NavBarMobille />



                <div className="conteudoInicio" >
                    <h1 className='shadow-Text'>Pokemon <br /> saiba mais sobre esses bichos</h1>
                    <h3>Cada criatura tem sua própria história e habilidades únicas. Eles nos ensinam sobre amizade, estratégia e a importância da perseverança na jornada da vida.</h3>
                </div>

                <div className='btnInicio flex'>
                    <ButtonInicio />
                    <ButtonInicio2 />
                </div>

                <div className='img-snorlax'>
                    <img className='dormindo' src={dormindo} alt="" />
                    <img className='snorlax' src={snorlax} alt="" />
                </div>


                {/* jeito para abrir um modal */}
                {verificar &&
                 <EscolherTipo />
                }

   
                


                    <CarouselInfinite />

                    <div id="tipos"></div>
                    <CarouselTipos />

                    <div id="comidas">
                        <h1 className='shadow-Text'>Saiba Mais Sobre as Comidas dos Pokemons</h1>
                    
                        <div className="flex info-comida">
                            <img src={leite} alt="" />
                            <h3>Ao Tomar Moomoo Milk Seu Pokemon Recupera 100 HP.</h3>
                        </div>

                        <div className="flex info-comida">
                        <img src={rare} alt="" />
                        <h3>Comer uma Rare Candy Faz Seu Pokemon Aumentar o nível em 1.</h3>
                        </div>

                        <div className="flex info-comida">
                        <img src={fruta} alt="" />
                        <h3>Ao Comer Frutas Seu Pokemon Pode, Recupera 10 HP, Cura qualquer status negativo....</h3>
                        </div>

                        <img src={limao} className='limao' alt="" />
                    </div>
                    
                    <div className="footer">
                        <ButtonGrup />
                        <Footer />
                    </div>
                    

        </div>
        </Provider>
    )

}