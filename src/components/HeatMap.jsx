import React from "react";
import inicio_panel from '../assets/inicio_panel.png'
export const HeatMap = () => {

  return (
    <section id="about">
      <div className="container flex px-5 py-3 md:flex-row flex-col items-center">

      
         <iframe src="https://tia.atalait.com.mx:5133/buscaEC/"
         style={{width: 'inherit'}}
         width="inherit" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowFullScreen={true}></iframe>
          

      </div>
    </section>
  );
}