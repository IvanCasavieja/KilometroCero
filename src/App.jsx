import React from 'react';
import "./styles/main.css"
import { EleccionSucursal } from './EleccionSucursal';
import { Nav } from './Nav';

export const App = () => {


  return (
    <>
      <Nav />
      <EleccionSucursal />
    </>
  );
};