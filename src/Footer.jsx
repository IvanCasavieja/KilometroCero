import React, { useContext } from 'react'
import DataContext from './dataContext/DataContext';


export const Footer = () => {

  const { sucursalElegida } = useContext(DataContext)

  return (
    <div className='contenedorTotalFooter'>
      <div className="divisionUno division">
        <div className='TituloFooter'>
          <h2> {sucursalElegida.nombre} </h2>
        </div>
        <div className='parrafoFooter'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quibusdam!</p>
        </div>
      </div>
      <div className="divisionDos division">
        <div className='TituloFooter'>
          <h2> Titulo x </h2>
        </div>
        <div className='parrafoFooter'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quibusdam!</p>
        </div></div>
      <div className="divisionTres division">
        <div className='mapaSuc'>

          <iframe src={sucursalElegida.mapa.src} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>
    </div >
  )
}
