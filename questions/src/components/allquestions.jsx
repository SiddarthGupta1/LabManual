import React, { useState } from "react";

const boxStyle = {
  border: "1px solid #ccc",
  padding: "16px",
  margin: "16px auto",
  width: "300px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
};

const inputStyle = {
  padding: "6px",
  marginBottom: "8px",
  width: "80%"
};

const buttonStyle = {
  padding: "6px 12px",
  cursor: "pointer"
};

// 1. Factorial Component
export function Factorial() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);

  const calculateFactorial = () => {
    let fact = 1;
    for (let i = 1; i <= Number(num); i++) {
      fact = fact * i;
    }
    setResult(fact);
  };

  return (
    <div style={boxStyle}>
      <h2>Factorial of a Number</h2>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} style={inputStyle} />
      <button style={buttonStyle} onClick={calculateFactorial}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

// 2. Fibonacci Component
export function Fibonacci() {
  const [num, setNum] = useState("");
  const [series, setSeries] = useState([]);

  const generateFibonacci = () => {
    let a = 0, b = 1;
    let arr = [];
    for (let i = 0; i < Number(num); i++) {
      arr.push(a);
      let next = a + b;
      a = b;
      b = next;
    }
    setSeries(arr);
  };

  return (
    <div style={boxStyle}>
      <h2>Fibonacci Series</h2>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} style={inputStyle} />
      <button style={buttonStyle} onClick={generateFibonacci}>Generate</button>
      <p>{series.join(", ")}</p>
    </div>
  );
}

// 3. Prime Number Check Component
export function PrimeCheck() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkPrime = () => {
    let n = Number(num);
    if (n <= 1) {
      setResult("Not a Prime Number");
      return;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        setResult("Not a Prime Number");
        return;
      }
    }
    setResult("Prime Number");
  };

  return (
    <div style={boxStyle}>
      <h2>Prime Number Check</h2>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} style={inputStyle} />
      <button style={buttonStyle} onClick={checkPrime}>Check</button>
      <p>{result}</p>
    </div>
  );
}

// 4. Sum of Digits Component
export function SumOfDigits() {
  const [num, setNum] = useState("");
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    let n = Number(num);
    let s = 0;
    while (n > 0) {
      s = s + (n % 10);
      n = Math.floor(n / 10);
    }
    setSum(s);
  };

  return (
    <div style={boxStyle}>
      <h2>Sum of Digits</h2>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} style={inputStyle} />
      <button style={buttonStyle} onClick={calculateSum}>Calculate</button>
      {sum !== null && <p>Sum: {sum}</p>}
    </div>
  );
}

