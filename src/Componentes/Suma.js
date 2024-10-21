
import React, { useState } from 'react';

function Suma() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacion, setOperacion] = useState(''); // Track selected operation

  const handleInputChange = (event, type) => {
    const value = Number(event.target.value);
    if (type === 'num1') {
      setNum1(value);
    } else if (type === 'num2') {
      setNum2(value);
    }
  };

  const handleOperationSelection = (op) => {
    setOperacion(op); // Set the selected operation
  };

  const handleCalculate = () => {
    let resultado = 0;
    switch (operacion) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      default:
        resultado = 'Error: Invalid operation';
    }
    setResultado(resultado);
  };

  const handleReset = () => {
    setNum1(0);
    setNum2(0);
    setResultado(0);
    setOperacion(''); 
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <div className="row justify-content-center">
        <div className="col-auto card">
          <input
            className="form-control mb-3"
            type="number"
            
            value={num1}
            onChange={(event) => handleInputChange(event, 'num1')}
          />
          <input
            className="form-control mb-3"
            type="number"
           
            value={num2}
            onChange={(event) => handleInputChange(event, 'num2')}
          />
          <div className="d-flex justify-content-around mb-3">
            <button
              className="btn btn-primary"
              onClick={() => handleOperationSelection('+')}
            >
              suma
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleOperationSelection('-')}
            >
              resta
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleOperationSelection('*')}
            >
              multiplicacion
            </button>
          </div>
          <button className="btn btn-primary mb-3" onClick={handleCalculate}>
            Calcular
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Reiniciar
          </button>
          {resultado !== 0 && (
            <div className="mt-3">Resultado: {resultado}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Suma;