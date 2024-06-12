import React from 'react'
import ReactDOM from 'react-dom/client'
import DataProvider from './dataContext/DataProvider.jsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { App } from './App.jsx'
import { MainSucursal } from './MainSucursal.jsx';
import { ErrorComponent } from './ErrorComponent.jsx';
import { Inicio } from './Inicio.jsx';
import { Servicios } from './Servicios.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/sucursal/:nombreSucursal' element={<MainSucursal />}></Route>
          <Route path='/sucursal/:nombreSucursal/Inicio' element={<MainSucursal />}></Route>
          <Route path='/sucursal/:nombreSucursal/Servicios' element={<Servicios />}></Route>
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </>
)
