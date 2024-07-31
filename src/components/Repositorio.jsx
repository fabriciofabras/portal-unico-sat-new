import React from "react";
import inicio_panel from '../assets/inicio_panel.png'
export const Repositorio = () => {

  return (
    <section id="about">
      <div className="container flex px-10 py-20 md:flex-row flex-col items-center">

      
         <iframe          style={{width: 'inherit'}}
         src="https://tia.atalait.com.mx:5133/tia/login/?next=/buscaEC/"
         width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowFullScreen={true}></iframe>


      </div>
    </section>
  );
}