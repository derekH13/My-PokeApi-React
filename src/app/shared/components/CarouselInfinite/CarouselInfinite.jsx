import React, { useContext, useEffect } from "react";
import './CarouselInfinite.css';


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
import AppContext from "../../contexts/AppContext";



function CarouselInfinite() {


  useEffect(() => {
    const logosContainer = document.querySelector(".logos");
    if (logosContainer && logosContainer.childElementCount < 1) {
      const logosSlide = document.querySelector(".logos-slide");
      const copy = logosSlide.cloneNode(true);
      logosContainer.appendChild(copy);
    }
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={tipo1} alt="1M" />
        <img src={tipo2} alt="1M" />
        <img src={tipo3} alt="1M" />
        <img src={tipo4} alt="1M" />
        <img src={tipo5} alt="1M" />
        <img src={tipo6} alt="1M" />
        <img src={tipo7} alt="1M" />
        <img src={tipo8} alt="1M" />
        <img src={tipo9} alt="1M" />
        <img src={tipo10} alt="1M" />
        <img src={tipo11} alt="1M" />
        <img src={tipo12} alt="1M" />
      </div>
    </div>
  );
}

export default CarouselInfinite;
