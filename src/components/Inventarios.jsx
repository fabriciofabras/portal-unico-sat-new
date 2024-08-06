import React from "react";
import inicio_panel from '../assets/inicio_panel.png'
import { URL_SERVICE } from "../properties";
export const Inventarios = () => {

  return (
    <section id="about">
      <div className="container flex px-5 py-3 md:flex-row flex-col items-center">

      
         <iframe  style={{width: 'inherit'}}
         src={URL_SERVICE}
         height="700" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowFullScreen={true}></iframe>


      </div>
    </section>
  );
}