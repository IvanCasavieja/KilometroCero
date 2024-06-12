import React, { useContext, useState } from 'react';
import DataContext from './dataContext/DataContext';

export const ContenedorServicios = () => {
    const { sucursalElegida } = useContext(DataContext);
    const imageUrl = sucursalElegida.imagen;

    console.log(imageUrl)

    const [fotos, setFotos] = useState(true);
    const [sublimacion, setSublimacion] = useState(false);
    const [contacto, setContacto] = useState(false);

    const handleFotosClick = () => {
        setFotos(true);
        setSublimacion(false);
        setContacto(false);
    }

    const handleSublimacionClick = () => {
        setFotos(false);
        setSublimacion(true);
        setContacto(false);
    }

    const handleContactoClick = () => {
        setFotos(false);
        setSublimacion(false);
        setContacto(true);
    }



    return (
        <div className="contenedorTotalServicios">
            <div className="fondoDesenfocado" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="contenedorContenido">
                <div className="contendorServiciosMenu">
                    <button className={`botonServicios ${fotos ? 'activeBtn' : ''}`} onClick={handleFotosClick}>Fotos</button>
                    <button className={`botonServicios ${sublimacion ? 'activeBtn' : ''}`} onClick={handleSublimacionClick}>Sublimación</button>
                    <button className={`botonServicios ${contacto ? 'activeBtn' : ''}`} onClick={handleContactoClick}>Contacto</button>
                </div>

                <div className="contenedorInfoServicios">

                    {fotos && <div className="contenedorInfo">
                        <form className="formularioFotos" action="https://formspree.io/f/mqkrrkwr" method="POST" enctype="multipart/form-data">
                            <div className='contenedorTituloForm'>
                                <h1>¡Imprimimos tus fotos!</h1>
                            </div>
                            <div className='contenedorIzqForm'>
                                <div className='subtituloForm'>
                                    <h3>Ingresa tus datos</h3>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="nombreForm">Nombre</label>
                                    <input type="text" id='nombreForm' name="nombre" required />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="numeroDeTelefono">Número de teléfono</label>
                                    <input type="tel" id='numeroDeTelefono' name="telefono" required />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="correoElectronico">Correo electrónico</label>
                                    <input type="email" id='correoElectronico' name="email" required />
                                </div>
                            </div>
                            <div className='contenedorDerForm'>
                                <label for="archivos">Subir hasta 500 fotos:</label>
                                <input type="file" id="archivos" name="archivos[]" accept=".jpg,.jpeg,.png" multiple />
                            </div>
                            <div className='envio'>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>}
                    {sublimacion && <div>Contenido de Sublimación</div>}
                    {contacto && <div>Contenido de Contacto</div>}
                </div>
            </div>
        </div >
    );
}