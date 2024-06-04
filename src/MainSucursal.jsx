import React, { useContext } from 'react';
import DataContext from './dataContext/DataContext';
import { NavSucursales } from './NavSucursales';
import { Footer } from './Footer';

export const MainSucursal = () => {
    const { sucursalElegida } = useContext(DataContext)

    if (!sucursalElegida) {
        return <div>No se ha seleccionado ninguna sucursal</div>;
    }

    console.log(sucursalElegida)
    return (
        <>
            <NavSucursales />
            <Footer />
        </>
    );
};

