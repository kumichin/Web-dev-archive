//comienzo de meterle interactividad con el html

const entradaInput = document.getElementById("number");
const output = document.getElementById("output");
const boton = document.getElementById("convert-btn");
const mensaje = "esto tiene que salir";
//fin de la parte de meterle interactividad con el html

// let numToConvert = entradaInput.value;

const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

function convertToRoman(numToConvert) {
  // lista de todos los numeros y numerales relevantes

  // Creación de un cadena vacia para result
  let result = "";

  // Recorre los números (el array) mientras numToConvert sea mayor que el número, siga recorriendo
  numbers.forEach(function (number, i) {
    while (numToConvert >= number) {
      // agregue numerales a medida que avanza ej. 55 --> entra el bucle, encuentra la L, comienza de nuevo el bucle y encuentra la V
      result += roman[i];
      numToConvert -= number;
    }
  });
  //cierre de la función con return devolviendo result (resul a estas alturas son los numeros romanos reunidos por el bucle)

  return result;
}

let solucion;

boton.addEventListener("click", () => {
  if (entradaInput.value === "" /*tb vale !value*/) {
    output.innerText = "Por favor introduce un número valido";
    entradaInput.value = "";
  } else if (entradaInput.value < 1) {
    output.innerText = "Por favor introduce un número igual o mayor que 1";
    entradaInput.value = "";
  } else if (entradaInput.value > 3999) {
    output.innerText = "Por favor introduce un número igual o menor que 3999";
    entradaInput.value = "";
  } else {
    solucion = convertToRoman(entradaInput.value);
    entradaInput.value = "";
    output.textContent = solucion;

    output.style.fontSize = "3.5rem";
    // resultado.style.paddingBottom = '3rem';
  }
});

entradaInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    boton.click();
  }
});
