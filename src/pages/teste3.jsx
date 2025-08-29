import React from "react";

function Teste3() {
  function receber_numero() {
    let num1 = parseInt(prompt("Escreva o primeiro número: "));
    let num2 = parseInt(prompt("Escreva o segundo número: "));
    return [num1, num2];
  }

  function calcular(op) {
    let [num1, num2] = receber_numero();
    let res = 0;

    switch (op) {
      case "+":
        res = som(num1, num2);
        break;
      case "-":
        res = sub(num1, num2);
        break;
      case "*":
        res = mult(num1, num2);
        break;
      case "/":
        res = div(num1, num2);
        break;
      case "**":
        res = exp(num1, num2);
        break;
    }
    alerlett(`${num1}${op}${num2}=${res}`);
  }

  function som(num1, num2) {
    let res = num1 + num2;
    return res;
  }
  function sub(num1, num2) {
    let res = num1 - num2;
    return res;
  }

  function mult(num1, num2) {
    let res = num1 * num2;
    return res;
  }

  function div(num1, num2) {
    let res = num1 / num2;
    return res;
  }
  function exp(num1, num2) {
    let res = num1 ** num2;
    return res;
  }

  return (
    <>
      <button class="btn btn-primary" onClick={() => calcular("+")}>
        Somar
      </button>
      <button class="btn btn-primary" onClick={() => calcular("-")}>
        Subtração
      </button>
      <button class="btn btn-primary" onClick={() => calcular("*")}>
        Multiplicação
      </button>
      <button class="btn btn-primary" onClick={() => calcular("/")}>
        Divisão
      </button>
      <button class="btn btn-primary" onClick={() => calcular("**")}>
        Exponenciação
      </button>
    </>
  );
}

export default Teste3;
