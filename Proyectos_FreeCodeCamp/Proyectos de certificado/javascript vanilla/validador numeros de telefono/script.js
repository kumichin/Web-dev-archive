
//vinculacion botones al html

const entradaPhone = document.getElementById("user-input");
const output = document.getElementById("results-div");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");


check.addEventListener("click", () => {

    const expresion = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/

    if(entradaPhone.value === ""){

      output.innerText = "Please provide a phone number"
    }
    else if(expresion.test(entradaPhone.value)){

      output.innerText = `Valid US number: ${entradaPhone.value}`;
      entradaPhone.value = "";
    }else{
      telephoneCheck(entradaPhone.value);
      entradaPhone.value = "";
      output.textContent = `Invalid US number: ${entradaPhone.value}`;
    }
  })

  //boton de limpiar contenido "clear"

clear.addEventListener("click", () =>
    output.innerText = "");
