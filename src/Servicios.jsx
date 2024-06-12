import React, { useContext } from 'react';
import { NavSucursales } from './NavSucursales'
import DataContext from './dataContext/DataContext';
import { Footer } from './Footer'
import { ContenedorServicios } from './ContenedorServicios';

export const Servicios = () => {
  const { sucursalElegida } = useContext(DataContext)

  return (
    <>
      <NavSucursales />
      <ContenedorServicios />
      <Footer />
    </>
  )
}
