import React from 'react'

export default function BotonMas({setpagina}) {

    const handleClickMas = () =>{
        setpagina(prev => prev+1)
      }
      

    return (
        <div className="botonmas" onClick={handleClickMas}>
            <div className="botonmas__flechas"></div>
        </div>
    )
}
