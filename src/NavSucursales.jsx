import React, { useContext } from 'react';
import DataContext from './dataContext/DataContext';
import { NavLink, Link } from 'react-router-dom';


export const NavSucursales = () => {
    const { sucursalElegida } = useContext(DataContext)

    return (
        <>
            <div className="contenedorNavegacionSucursales">
                <div className='contenedorImagen'>
                    <Link className='links' to={"/"}><img className='imagenNav' src="/logo.png" alt="Logo de Kilometro Cero" /></Link>
                </div>
                <div className='contenedorBotonesNav'>
                    <ul>
                        <li>
                            <NavLink className="links navLink" to={`/sucursal/${sucursalElegida.ruta}`} activeclassname="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink className="links navLink" to={`/sucursal/${sucursalElegida.ruta}/Servicios`} activeclassname="active">Servicios</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
