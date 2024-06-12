import React, { useContext } from 'react';
import { NavSucursales } from './NavSucursales'
import DataContext from './dataContext/DataContext';
import { Footer } from './Footer'
import { ContenedorServicios } from './ContenedorServicios';
import { Navigate } from 'react-router-dom';

export const Servicios = () => {
  const { sucursalElegida } = useContext(DataContext)

  if (!sucursalElegida) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <NavSucursales />
      <ContenedorServicios />
      <Footer />
    </>
  )
}
