import React, {useState} from 'react';
import './css/index.css'
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import Pagina4 from './pages/Pagina4';
import BotonMenos from './components/BotonMenos';
import BotonMas from './components/BotonMas';
import ReproductorMusica from './components/ReproductorMusica';

export default function App() {
  const [pagina, setpagina] = useState(1)
  
  
  return (
    <main>
      <ReproductorMusica/>
      {pagina>1 && <BotonMenos setpagina={setpagina}/>}
      {pagina <4 && <BotonMas setpagina={setpagina}/>}
      {pagina===1 && <Pagina1/>}
      {pagina===2 && <Pagina2/>}
      {pagina===3 && <Pagina3/>}
      {pagina===4 && <Pagina4/>}
    </main>
  );
}
