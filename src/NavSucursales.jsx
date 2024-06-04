import React, { useContext } from 'react';
import DataContext from './dataContext/DataContext';
import { Link, NavLink } from 'react-router-dom';


export const NavSucursales = () => {
    const { sucursalElegida } = useContext(DataContext)

    return (
        <nav className='navSucursal'>
            <div className="contenedorImagenSucursales">
                <Link className='links' to={`/sucursal/${sucursalElegida.ruta}`}>
                    <img className='imagenNav' src="/logo.png" alt="Logo de Kilometro Cero" />
                </Link>
            </div>
            <div className='contenedorBotones'>
                <ul>
                    <li>
                        <NavLink className="links" to={'/sucursal/:nombreSucursal/Impresiones'} activeclassname="active">Impresiones</NavLink>
                    </li>
                    <li>
                        <NavLink className="links" to={'/sucursal/:nombreSucursal/Sublimaciones'} activeclassname="active">Sublimaciones</NavLink>

                    </li>
                    <li>
                        <NavLink className="links" to={'/sucursal/:nombreSucursal/Contacto'} activeclassname="active">Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
