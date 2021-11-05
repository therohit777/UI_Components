import React from 'react';
import "../components/navbar.css";
import Logo from "../components/images/logo.png";
import {MdViewHeadline} from "react-icons/md";
import { useState } from 'react';

export const Navbar = () => {

    const [navshow, setnavshow] = useState(false);

    return (
        <div>
            <header>
                <nav>
                    <dov className="logo">
                        <img src={Logo} alt="" width="60px" height="60px" />
                        <p className="Logosname">Phoe<span className="colorlogo">nix</span></p>
                    </dov>
                    <ul className={(!navshow)?"navitems":"navitems showup"}>
                         <li><a href="#home">home</a></li>
                         <li><a href="#about">about</a></li>
                         <li><a href="#contact">contact</a></li>
                         <li><a href="#services">services</a></li>
                         <li><a href="#privacyandpolicy ">privacy & policy</a></li>
                    </ul>
                    <div className="hamburgmenu" onClick={()=>setnavshow(!navshow)}>
                    <MdViewHeadline style={{"color":"white"}} />
                    </div>

                </nav>
            </header>
        </div>
    )
}
