import React from "react";

import './CarouselTipos.css'

// imagem
import squirtle from '../../img/squirtle.png'
import Ivysaur from '../../img/Ivysaur-.png'
import Charmander from '../../img/Charmander (2).png'
import gengar from '../../img/gengar.png'
import Ralts from '../../img/Ralts.png'


import ButtonInicio from "../buttonInicio/ButtonInicio";
import EscolherTipo from "../EscolherTipo/EscolherTipo";


function CarouselTipos(){

    //mudar para true

    function Escolher( dados ){
       console.log(dados)
    }





    return(

<div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <div class="relative container-carousel overflow-hidden rounded-lg md:h-96">

        <div class="hidden container-img duration-700 ease-in-out" data-carousel-item="active">
           
        <div className="agua"></div>
                <h1 >Tipo Agua</h1>

                <img src={squirtle} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                <div className="info-poke">
                    <h3>Tipo Água são os mestres dos oceanos representando a fluidez e a adaptabilidade da própria água. Com movimentos que variam desde potentes jatos de água até ondas devastadoras, são versáteis tanto em batalha quanto em ambiente.</h3>
                    <button className="btn-planta" onClick={() => Escolher(['7', '393', '158', ' 656'])}>
                    Escolha um Tipo Agua
                    </button>
            </div>

        </div>
        <div class="hidden container-img duration-700 ease-in-out" data-carousel-item>
            <div className="grama"></div>
                <h1 >Tipo Planta</h1>

                <img src={Ivysaur} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                <div className="info-poke">
                    <h3>Tipo Grama são os guardiões da natureza, conectados profundamente com a terra e o poder do crescimento. Com habilidades que evocam plantas, vinhas e flores, eles utilizam a força da natureza para curar, proteger e atacar. </h3>
                    <button className="btn-planta" onClick={() => Escolher(['1', '252', '387', '152'])}>
                    Escolha um Tipo Planta
                    </button>
            </div>
           
        
        </div>
        <div class="hidden container-img duration-700 ease-in-out" data-carousel-item>
    
        <div className="fogo"></div>
                <h1 >Tipo Fogo</h1>

                <img src={Charmander} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                <div className="info-poke">
                    <h3>Tipo fogo são conhecidos por sua natureza ardente e espírito indomável. Com habilidades que evocam chamas e calor, eles são mestres em atacar com intensidade e velocidade. </h3>
                    <button className="btn-planta" onClick={() => Escolher(['4', '155', '255', '390'])}>
                    Escolha um Tipo Fogo
                    </button>
            </div>
        </div>

        <div class="hidden container-img duration-700 ease-in-out" data-carousel-item>
          
        <div className="dark1"></div>
                <h1 >Tipo Ghost</h1>

                <img src={gengar} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                <div className="info-poke">
                    <h3>Tipo Ghost são conhecidos por sua astúcia, mistério e poder sombrio. Muitas vezes associados à noite e às sombras, eles utilizam táticas furtivas e ataques imprevisíveis para confundir e dominar seus oponentes.</h3>
                    <button className="btn-planta" onClick={() => Escolher(['92', '885', '355', '570'])}>
                    Escolha um Tipo Ghost
                    </button>
            </div>
            

        </div>
        <div class="hidden container-img duration-700 ease-in-out" data-carousel-item>
          
        <div className="psiquico"></div>
                <h1 >Tipo psychic</h1>

                <img src={Ralts} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                <div className="info-poke"> 
                    <h3 className="psiqui">Tipo Psíquico são mestres da mente e do poder mental. Com habilidades que transcendem o físico, eles manipulam forças invisíveis para confundir, hipnotizar e dominar seus oponentes.</h3>
                    <button className="btn-planta" onClick={() => Escolher(['63', '281', ' 439', '360'])}>
                    Escolha um Tipo Psiquico
                    </button>
            </div>
            


        </div>
    </div>
    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse mostrar-secao left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>


        


    )
}

export default CarouselTipos