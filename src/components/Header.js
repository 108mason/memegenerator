import React from "react"
import "../style.css"
import logo from '../images/TrollFace.png'  

export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo}
                className="header--image"
                alt="logo"
            />
            <h2 className="header--title">Meme Generator</h2>

        </header>
    )
}
