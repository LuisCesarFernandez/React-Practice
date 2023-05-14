import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Principal } from "./CompPrincipal/Principal";
import { MyNavbar } from "./header";
import { Footer } from "./footer";
import { Formulario } from "./CompRegistro/formulario";
import { Catalogo } from "./CompCatalogo/catalogo";
import { Pastel } from "./CompCatalogo/pasteles";
import { Pan } from "./CompCatalogo/panes";
import { Postre } from "./CompCatalogo/postres";
import { Ubicacion } from "./CompUbicanos/Mapa";
export function App(){
    return(
        <Router>
            <MyNavbar/>
            <Routes>
                <Route path="/" element={<Principal/>}></Route>
                <Route path="/Registrate" element={<Formulario/>}></Route>
                <Route path="/Catalogo" element={<Catalogo/>}></Route>
                <Route path="/Pasteles" element={<Pastel/>}></Route>
                <Route path="/Panes" element={<Pan/>}></Route>
                <Route path="/Postres" element={<Postre/>}></Route>
                <Route path="/Ubicanos" element={<Ubicacion/>}></Route>
            </Routes>
            <Footer/>
        </Router>
    );
}