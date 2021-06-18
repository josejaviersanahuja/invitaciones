import React from 'react'

export default function BotonMenos({setpagina}) {
    const handleClickMenos = () =>{
        setpagina(prev => prev-1)
      }
    return (
        <div className="botonmenos" onClick={handleClickMenos}>
            <div className="botonmenos__flechas"></div>
        </div>
    )
}
