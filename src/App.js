import React, { useRef } from 'react';
import Camara from './Componentes/Camara';
import Contador from './Componentes/Contador';
import Suma from './Componentes/Suma';
function App() {
  
  return (
    <div class="container text-center">
    <div class="row">
      <div class="col">
      <Suma/>
      </div>
      <div class="col">
      <Contador/>
      </div>
      <div class="col">
      <Camara/>
      </div>
    </div>
  </div>
  );
}

export default App;
