
// botones

let palabra = document.getElementById("text-input");
const resultado = document.getElementById("result");
const boton = document.getElementById("check-btn");

resultado.style.backgroundColor = "black";
resultado.style.padding = "1rem";




// // FUNCIÓN QUE CALCULA SI UNA FRASE ES UN PALINDROMO O NO

function palindrome(input) {
  impOrig = input;  //resetea el campo input y es como la actualizacion de pantalla pero solo del input

  if (input === ""){
    alert ("Por favor, rellene la entrada de texto");
    return;
  }

  let sentence = input.replace(/[\W+_]/gi, '');  //Esta expresion regular: coincide con todos los caracteres, todo lo que no sea caracteres lo sustituye or un espacio, la bandera g para que coja todas las conincidencias, i para que no distinga entre mayusculas y minuscular y "" para que ignore los espacios.

  for(let i = 0, count = sentence.length-1; i < sentence.length-1; i++) { //bucle que va contabiliazando como es la palabra al derecho y al reves
    //al partirlo por 2 da beneficios cuando las cadenas son muy largas

    if(sentence[i].toLowerCase() !== sentence[count-i].toLowerCase()) { //condicion que verifica si son palindromos o no
      resultado.textContent = `${input} no es un palíndromo`;

    }else{
     resultado.textContent = `${input} es un palíndromo`;
    }

  }

};


boton.addEventListener("click", function(){
  palindrome(palabra.value);
  palabra.value = "";
  resultado.removeAttribute("hidden");

});
// console.log(palindrome(palabra));
