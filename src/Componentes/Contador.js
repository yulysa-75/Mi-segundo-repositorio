import React, { useState } from 'react';

const tonoClic = new Audio('/sonido/Boton.mp3');
function Contador() {
  
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    tonoClic.play(); 
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default Contador;