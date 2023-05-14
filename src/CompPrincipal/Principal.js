import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import {BrowserRouter as Router} from 'react-router-dom'
import Carrusel from "./carrusel";
import { Nosotros } from "./nosotros";
import { Vision } from "./vision";
import { Mision } from "./mision";
export function Principal(){
    return(
        <div>
            <Carrusel/>
            <Nosotros/>
            <Vision/>
            <Mision/>
        </div>
    );
}