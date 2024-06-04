import React from 'react'
import { NavLink, Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className='nav'>
            <div className='contenedorImagen'>
                <Link className='links' to={"/"}><img className='imagenNav' src="/logo.png" alt="Logo de Kilometro Cero" /></Link>
            </div>
        </nav>
    )
}
