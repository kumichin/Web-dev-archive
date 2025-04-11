 
 let player= 0, computer = 0, rondas;

while (player<= 5 || computer <= 5) {

// Obtener la elección del usuario
let eleccionUsuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();

// Verificar si la elección del usuario es válida y jugar el juego
if (eleccionUsuario === "piedra" || eleccionUsuario === "papel" || eleccionUsuario === "tijeras") {
  jugar(eleccionUsuario);
} else {
  console.log("Elección inválida. Por favor, elige piedra, papel o tijeras.");
}

function jugar(eleccionUsuario) {
    // Definir las opciones disponibles por medio de un Arreglo
    let opciones = ["piedra", "papel", "tijeras"];
  
    // Generar la elección aleatoria de la máquina con metodos
    let eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
  
   
        
    // Verificar el resultado del juego con condicional if
    if (eleccionUsuario === eleccionMaquina) {
      // Empate
      console.log("Empate. Ambos eligieron " + eleccionUsuario + ".");
    } else if (
      (eleccionUsuario === "piedra" && eleccionMaquina === "tijeras") ||
      (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
      (eleccionUsuario === "tijeras" && eleccionMaquina === "papel")
    ) {
      // El usuario gana
      player ++;
      console.log("¡Ganaste! Tú eliges " + eleccionUsuario + " y la máquina elige " + eleccionMaquina + ".");
    } else {
      // El usuario pierde
      computer ++;
      console.log("Perdiste. Tú eliges " + eleccionUsuario + " y la máquina elige " + eleccionMaquina + ".");
    }
function puntuacion(){
    console.log( "tu putuacion es " + player);
    console.log("la puntuacion de la maquina es " + computer);
    
}
console.log(puntuacion());



}function verificarGanador(){
    if(player <= 5 || computer <= 5){
        if(computer == 5){
            console.log( "Tu puntuacion es " + player + " y la puntuacion de la maquina es " + computer + ". por tanto La maquina ha ganado");
        }else if(player == 5){
            console.log( "Tu puntuacion es " + player + " y la puntuacion de la maquina es " + computer + ". por tanto tu has ganado");
        }
    }
}console.log(verificarGanador())


  }
  


