import React from "react";

import './CarouselTipos.css'

// imagem
import squirtle from '../../img/squirtle.png'
import Ivysaur from '../../img/Ivysaur-.png'
import Charmander from '../../img/Charmander (2).png'
import gengar from '../../img/gengar.png'
import Ralts from '../../img/Ralts.png'


import ButtonInicio from "../buttonInicio/ButtonInicio";


function CarouselTipos(){
    return(
        

<div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <div class="relative container-carousel overflow-hidden rounded-lg md:h-96">

        <div class="hidden container-img duration-700 ease-in-out" data-carousel-item="active">
           
        <div className="agua"></div>
                <h1 >Tipo Agua</h1>

                <img src={squirtle} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                <div className="info-poke">
                    <h3>Cada criatura tem sua própria história e habilidades únicas. Eles nos ensinam sobre amizade, estratégia e a importância da perseverança na jornada da vida.</h3>
                    <button className="btn-planta">
                    Escolha um Tipo Agua
                    </button>
            </div>

        </div>
        <div class="hidden container-img duration-700 ease-in-out" data-carousel-item>
            <div className="grama"></div>
                <h1 >Tipo Planta</h1>

                <img src={Ivysaur} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                <div className="info-poke">
                    <h3>Cada criatura tem sua própria história e habilidades únicas. Eles nos ensinam sobre amizade, estratégia e a importância da perseverança na jornada da vida.</h3>
                    <button className="btn-planta">
                    Escolha um Tipo Planta
                    </button>
            </div>
           
        
        </div>
        <div class="hidden container-img duration-700 ease-in-out" data-carousel-item>
    
        <div className="fogo"></div>
                <h1 >Tipo Fogo</h1>

                <img src={Charmander} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                <div className="info-poke">
                    <h3>Cada criatura tem sua própria história e habilidades únicas. Eles nos ensinam sobre amizade, estratégia e a importância da perseverança na jornada da vida.</h3>
                    <button className="btn-planta">
                    Escolha um Tipo Fogo
                    </button>
            </div>
        </div>

        <div class="hidden container-img duration-700 ease-in-out" data-carousel-item>
          
        <div className="dark1"></div>
                <h1 >Tipo Dark</h1>

                <img src={gengar} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                <div className="info-poke">
                    <h3>Cada criatura tem sua própria história e habilidades únicas. Eles nos ensinam sobre amizade, estratégia e a importância da perseverança na jornada da vida.</h3>
                    <button className="btn-planta">
                    Escolha um Tipo Dark
                    </button>
            </div>
            

        </div>
        <div class="hidden container-img duration-700 ease-in-out" data-carousel-item>
          
        <div className="psiquico"></div>
                <h1 >Tipo psychic</h1>

                <img src={Ralts} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                <div className="info-poke">
                    <h3>Cada criatura tem sua própria história e habilidades únicas. Eles nos ensinam sobre amizade, estratégia e a importância da perseverança na jornada da vida.</h3>
                    <button className="btn-planta">
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