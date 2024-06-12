import React from 'react';
import "./styles/main.css"
import { Nav } from './Nav.jsx';
import { EleccionSucursal } from './EleccionSucursal';

export const App = () => {


  return (
    <>
        <Nav />
      <EleccionSucursal />
    </>
  );
};