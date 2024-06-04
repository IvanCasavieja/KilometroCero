import React from 'react'
import ReactDOM from 'react-dom/client'
import DataProvider from './dataContext/DataProvider.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from './App.jsx'
import { MainSucursal } from './MainSucursal.jsx';
import { Contacto } from './opcionesSucursales/Contacto.jsx';
import { Impresiones } from './opcionesSucursales/Impresiones.jsx';
import { Sublimaciones } from './opcionesSucursales/Sublimaciones.jsx';
import { ErrorComponent } from './ErrorComponent.jsx';
import { Nav } from './Nav.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <DataProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path={'/*'} element={<ErrorComponent />} />
          <Route path='/sucursal/:nombreSucursal' element={<MainSucursal />}></Route>
          <Route path='/sucursal/:nombreSucursal/inicio' element={<MainSucursal />}></Route>
          <Route path='/sucursal/:nombreSucursal/Contacto' element={<Contacto />}></Route>
          <Route path='/sucursal/:nombreSucursal/Impresiones' element={<Impresiones />}></Route>
          <Route path='/sucursal/:nombreSucursal/Sublimaciones' element={<Sublimaciones />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </>
)
