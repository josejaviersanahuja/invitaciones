import React from "react";
import jm from '../imagenes/jm.jpg'
export default function Texto() {
  const QUIEN = {
    acak : <p className="parrafo p__3"><span className="parrafo__content"> ¡¡¡Anímate Ana, Anímate Karla !!! </span></p>,
    ghb : <p className="parrafo p__3"><span className="parrafo__content"> ¡¡¡Anímate Brianna !!! </span></p>,
    cjsst: <p className="parrafo p__3"><span className="parrafo__content"> ¡¡¡Anímate Sara, Sere, Thiago !!! </span></p>,
    ijl: <p className="parrafo p__3"><span className="parrafo__content"> ¡¡¡Anímate Laura !!! </span></p>,
    ber: <p className="parrafo p__3"><span className="parrafo__content"> ¡¡¡Anímate Berta !!! </span></p>,
    apa: <p className="parrafo p__3"><span className="parrafo__content"> ¡¡¡Anímate Abril !!! </span></p>,
    ps: <p className="parrafo p__3"><span className="parrafo__content"> ¡¡¡Animense Abu Piedad, Abu José !!! </span></p>
}
  return (
    <div className="p">
      <p className="parrafo p__1">
        <span className="parrafo__content">Ven y disfruta con nosotros</span>
      </p>
      <p className="parrafo p__2">
        <span className="parrafo__content">
          de una sorpresa para José Manuel
        </span>
      </p>
      {QUIEN["cjsst"]}
      <p className="parrafo p__4">
        <span className="parrafo__content"> y lo sorprendemos juntos</span>
      </p>
      <p className="parrafo p__5">
        <span className="parrafo__content">Rugiremos muy fuerte...</span>
      </p>
      <p className="parrafo p__6">
        <span className="parrafo__content">SORPRESAAAAAA</span>
      </p>
      <p className="parrafo p__7">
        <span className="parrafo__content">Habrá piscina!!! Y es honda </span>
      </p>
      <p className="parrafo p__8">
        <span className="parrafo__content">Así que lleva manguitos</span>
      </p>
      <p className="parrafo p__9">
        <span className="parrafo__content">
          Podremos jugar todo el día en la piscina
        </span>
      </p>
      <p className="parrafo p__10">
        <span className="parrafo__content"> Va a ser divertido</span>
      </p>
      <p className="parrafo p__11">
        <span className="parrafo__content">Va a haber música</span>
      </p>
      <p className="parrafo p__12">
        <span className="parrafo__content"> ¡¡¡Bailaremos!!!</span>
      </p>
      <p className="parrafo p__13">
        <span className="parrafo__content">Disfrutaremos en familia</span>
      </p>
      <p className="parrafo p__14">
        <span className="parrafo__content">La pasaremos bien rico</span>
      </p>
      <p className="parrafo p__15">
        <span className="parrafo__content">
          Así que pide permiso a tus papis para ir
        </span>
      </p>
      <p className="parrafo p__16">
        <span className="parrafo__content">
          Usa la palabra mágica: porfiiiiiiiii...
        </span>
      </p>
      <p className="parrafo p__17">
        <span className="parrafo__content">
          Que sean una verdadera <br />
          Guardia del León
        </span>
      </p>
      <p className="parrafo p__18">
        <span className="parrafo__content">
          El lunes 5 de Julio <br />A las 12:00 del mediodía.
        </span>{" "}
      </p>
      <p className="parrafo p__19">
        <span className="parrafo__content">
          En Charco del Pino, Calle Charcay.
          <br /> Aparcamiento de la asociación <br />
          Virgen del Pino.
        </span>
      </p>
      <p className="parrafo p__20">
        <span className="parrafo__content">
          En dirección al parque, habrán globos,
          <br /> que marquen el camino.
        </span>
      </p>
      <img src={jm} alt="jm" width={270} height={270} />  
    </div>
  );
}
