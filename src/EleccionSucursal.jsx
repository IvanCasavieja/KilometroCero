import React, { useContext, useEffect, useState } from 'react';
import sucursalesData from './json/Sucursales.json';
import { Link } from 'react-router-dom';
import DataContext from './dataContext/DataContext';

export const EleccionSucursal = () => {
    const [sucursales, setSucursales] = useState([]);
    const { setSucursalElegida } = useContext(DataContext)

    useEffect(() => {
        setSucursales(sucursalesData);
    }, []);

    const informacionSucursalElegida = (sucursal) => {
        setSucursalElegida(sucursal)
    }

    return (
        <>
            <div className="containerSucursales">
                <h1 className='tituloBienvenida'>Bienvenid@s</h1>
                <p className='seleccionarSuc'>Seleccione su sucursal ↓</p>
                <div className='contenedorCentrado'>
                    {sucursales.map((sucursal) => (
                        <Link onClick={() => informacionSucursalElegida(sucursal)} className='contenedorSucursal' key={sucursal.id} to={`/sucursal/${sucursal.ruta}`} style={{ '--sucursal-ubicacion': `"${sucursal.ubi}"`, '--sucursal-nombre': `"${sucursal.nombre}"`}} >
                            <img className='imagenSucursales' src={sucursal.imagen} alt={sucursal.nombre} />
                        </Link>
                    ))}
                </div>
            </div >
        </>
    )
}
