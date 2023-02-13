import React, { useState } from 'react';


const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState(0);
  
    const handleSubmit = e => {
      e.preventDefault();
      if (operation === 'add') {
        setResult(num1 + num2);
      } else if (operation === 'subtract') {
        setResult(num1 - num2);
      } else if (operation === 'multiply') {
        setResult(num1 * num2);
      } else if (operation === 'divide') {
        setResult(num1 / num2);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={num1}
          onChange={e => setNum1(parseInt(e.target.value))}
        />
        <select value={operation} onChange={e => setOperation(e.target.value)}>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={e => setNum2(parseInt(e.target.value))}
        />
        <button type="submit">Calculate</button>
        <p>Result: {result}</p>
      </form>
    );
  };
  
  export default Calculator;