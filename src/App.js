import { useState } from "react";
import './a.css'

function App() {
  const [calculateA, setCalculateA] = useState("");
  const [calculateB, setCalculateB] = useState("");
  const [result, setResult] = useState(0);

  const handleCalculate = (op) => {
    let result;
    const numA = parseInt(calculateA);
    const numB = parseInt(calculateB);
    if (isNaN(numA) || isNaN(numB)) {
      setResult("Nhập lại A và B là số");
      return;
    }
    
    if (numA < 0 || numB < 0) {
      setResult("A và B phải là số dương");
      return;
    }


    switch (op) {
      case "+":
        result = numA + numB;
        break;
      case "-":
        result = numA - numB;
        break;
      case "*":
        result = numA * numB;
        break;
      case "/":
        result = numB !== 0 ? numA / numB : "Không thể chia cho 0";
        break;
      default:
        result = "Phép toán không hợp lệ";
    }

    setResult(result);
  };

  return (
    <div className="wrapper">
      <input
      className="input-container"
        placeholder="Nhập số A"
        value={calculateA}
        onChange={(e) => setCalculateA(e.target.value)}
      />
      <input
      className="input-container"

        placeholder="Nhập số B"
        value={calculateB}
        onChange={(e) => setCalculateB(e.target.value)}
      />
      <div>
        <button  onClick={() => handleCalculate("+")}>+</button>
        <button onClick={() => handleCalculate("-")}>-</button>
        <button onClick={() => handleCalculate("*")}>*</button>
        <button onClick={() => handleCalculate("/")}>/</button>
      </div>
      <div>Kết quả: {result}</div>
    </div>
  );
}

export default App;
