

//conexion de los botones con el html

const entradaPhone = document.getElementById("user-input");
const output = document.getElementById("results-div");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");




// verificar si hay un 1 delante del numero de telefono, si no... debe de saltar el mensaje : "Please provide a phone number"
//condicional que aclara que si la funcion telephoneChecker es true: salta mensaje de "Valid US number: numero introducido"
//el condicional se maneja con un botón


check.addEventListener("click", () => {


  if(!entradaPhone.value){

    output.innerText = "Please provide a phone number"
  }
  else if(telephoneCheck(entradaPhone.value)){
    telephoneCheck(entradaPhone.value);
    output.innerText = `Valid US number: ${entradaPhone.value}`;
    entradaPhone.value = "";
  }else{
    telephoneCheck(entradaPhone.value);
    output.textContent = `Invalid US number: ${entradaPhone.value}`;
    entradaPhone.value = "";
  }
})

//boton de limpiar contenido "clear"

clear.addEventListener("click", () =>
  output.innerText = "");


//función validadora de numeros de teléfono de EEUU



function telephoneCheck(str) {
    const validPhone = [
      /^\d{3}-\d{3}-\d{4}$/,
      /^1 \d{3}-\d{3}-\d{4}$/,
      /^1 \(\d{3}\) \d{3}-\d{4}$/,
      /^\d{10}$/,
      /^\(\d{3}\)\d{3}-\d{4}$/,
      /^1 \d{3} \d{3} \d{4}$/,
      /^1\(\d{3}\)\d{3}-\d{4}$/,
    ]

    // .some() comprueba si el elemento del array cumple las condiciones de la función
    // .test() Valida si hay un patrón en la cadena y devielve un booleano

    return  validPhone.some((number) => number.test(str)); // al adaptarlo a web esto tendré que cambiarlo.
  }

  // console.log(telephoneCheck("2(757)622-7382"));

  entradaPhone.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      check.click();
    }
  });
