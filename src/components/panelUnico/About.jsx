import React from "react";
import inicio_panel from '../../assets/inicio_panel.png'
export const About = () => {

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop
    });
  }

  return (
    <section id="about">
      <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col items-center">

        <img

          src={inicio_panel}
        />
       {/*  <iframe src="https://tia.atalait.com.mx:5133/tia/login/?next=/buscaEC/"
         width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowFullScreen={true}></iframe>
 */}

      </div>
    </section>
  );
}