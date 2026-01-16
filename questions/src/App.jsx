import { Factorial, Fibonacci, PrimeCheck, SumOfDigits } from "./components/allquestions.jsx";

function App() {
  return (
    <div style={{
       display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "50px",
      padding: "50px"
   }}>
      <Factorial />
      <Fibonacci />
      <PrimeCheck />
      <SumOfDigits />
    </div>
  );
}

export default App;
