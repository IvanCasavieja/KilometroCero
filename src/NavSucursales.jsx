import React, { useContext } from 'react';
import DataContext from './dataContext/DataContext';
import { NavLink } from 'react-router-dom';


export const NavSucursales = () => {
    const { sucursalElegida } = useContext(DataContext)

    return (
        <>
            <div className="contenedorNavegacionSucursales">
                <div className='contenedorBotonesNav'>
                    <ul>
                        <li>
                            <NavLink className="links navLink" to={'/sucursal/:nombreSucursal/Impresiones'} activeclassname="active">Impresiones</NavLink>
                        </li>
                        <li>
                            <NavLink className="links navLink" to={'/sucursal/:nombreSucursal/Sublimaciones'} activeclassname="active">Sublimaciones</NavLink>

                        </li>
                        <li>
                            <NavLink className="links navLink" to={'/sucursal/:nombreSucursal/Contacto'} activeclassname="active">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
