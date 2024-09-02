import React from "react";
import inicio_panel from '../../assets/inicio_panel.png'
import { URL_SERVICE } from "../../properties";
import {Dashboard} from "../cmdb/Dashboard"
export const CMDB = () => {

  return (
    <section id="about">
      <div className="container flex px-1 py-3 md:flex-row flex-col items-center">

      <Dashboard></Dashboard>
         {/* <iframe  style={{width: 'inherit'}}
         src={`http://${URL_SERVICE}:3000`}
         height="700" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowFullScreen={true}></iframe>
 */}

      </div>
    </section>
  );
}