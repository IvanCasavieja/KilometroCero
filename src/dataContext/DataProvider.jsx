import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';
import data from '../json/Sucursales.json';

const DataProvider = ({ children }) => {
    const [sucursalElegida, setSucursalElegida] = useState(null);

    return (
        <DataContext.Provider value={{sucursalElegida, setSucursalElegida}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;