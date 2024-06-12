import React, { useContext } from 'react';
import DataContext from './dataContext/DataContext';
import { NavSucursales } from './NavSucursales';
import { Footer } from './Footer';
import { Inicio } from './Inicio';
import { App } from './App';

export const MainSucursal = () => {
    const { sucursalElegida } = useContext(DataContext)

    if (!sucursalElegida) {
        return <App />;
    }

    console.log(sucursalElegida)
    return (
        <>
            <NavSucursales />
            <Inicio />
            <Footer />
        </>
    );
};
