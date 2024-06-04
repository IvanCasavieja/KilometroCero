import React, { useContext } from 'react';
import DataContext from './dataContext/DataContext';
import { NavSucursales } from './NavSucursales';

export const MainSucursal = () => {
    const { sucursalElegida } = useContext(DataContext)

    if (!sucursalElegida) {
        return <div>No se ha seleccionado ninguna sucursal</div>;
    }

    console.log(sucursalElegida)
    return (
        <>
            {<NavSucursales />}
            <h1> {sucursalElegida.nombre} </h1>
        </>
    );
}
