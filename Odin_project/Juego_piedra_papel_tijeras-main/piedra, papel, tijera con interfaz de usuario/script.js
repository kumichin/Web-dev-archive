
function eleccionAleatoriaPc() {
    const opciones = ["piedra", "papel", "tijeras", "lagarto", "spock"];
    const aleatoriedad = Math.floor(Math.random () * opciones.length);
    return opciones[aleatoriedad]; 
}

function elJugadorHaGanadoLaPartida(player, computer) {
    return (player == "piedra" && computer == "tijeras")||
    (player == "papel" && computer == "piedra") ||
        (player == "tijeras" && computer == "papel" )||
        (player == "lagarto" && computer == "papel")||
        (player == "spock" && computer == "piedra")||
        (player == "piedra" && computer == "lagarto")||
        (player == "lagarto" && computer == "spock")||
        (player == "spock" && computer == "tijeras")||
        (player == "tijeras" && computer == "lagarto")||
        (player == "papel" && computer == "spock");
}

let puntosPlayer = 0;
let puntosMaquina = 0;

function resultadoRonda (eleccionUsuario){
    
    eleccionMaquina = eleccionAleatoriaPc();

    if (elJugadorHaGanadoLaPartida(eleccionUsuario, eleccionMaquina)){
        puntosPlayer++
        return `Has ganado!!!, tu elección ha sido  ${eleccionUsuario}  y la eleccion de la maquina ha sido   ${eleccionMaquina}`;
    }else if (eleccionUsuario === eleccionMaquina){
        return `es un empate, habeis elegido lo mismo  ${eleccionUsuario}`;
    }else{
        puntosMaquina++
        return `Has perdido!!!,  tu eleccion ha sido ${eleccionUsuario} y la eleccion de la maquina ha sido ${eleccionMaquina}`;
    }
}

const puntosJugadorSpanElement = document.getElementById("puntos-jugador");
const puntosMaquinaSpanElement = document.getElementById("puntos-maquina");
const mensajeResultadoDeLaRonda = document.getElementById("msg-resultado");
const ganadorMsgElement = document.getElementById("msg-ganador");
const eleccionesContainer = document.querySelector(".elecciones");
const resetBtn = document.getElementById("reset-game");
const tituloH2 = document.getElementById("h2")

function mostrarResultado(eleccionUsuario){
    mensajeResultadoDeLaRonda.innerHTML = resultadoRonda(eleccionUsuario);
    puntosJugadorSpanElement.innerHTML = puntosPlayer;
    puntosMaquinaSpanElement.innerHTML = puntosMaquina;
   

    if (puntosPlayer === 5 || puntosMaquina === 5){
        ganadorMsgElement.innerHTML = `${puntosPlayer === 5 ? "Tú has" : "La maquina ha"} ganado el juego!!!`;
    
    resetBtn.style.display = "block";
    eleccionesContainer.style.display = "none";
    tituloH2.style.display = "none";
    
    }

};

function resetGame() {
    puntosPlayer = 0;
    puntosMaquina = 0;
    puntosJugadorSpanElement.innerHTML = 0;
    puntosMaquinaSpanElement.innerHTML = 0;
    mensajeResultadoDeLaRonda.innerText = " ";
    ganadorMsgElement.innerHTML = " ";
    resetBtn.style.display = "none";
    eleccionesContainer.style.display = "flex";
    tituloH2.style.display = "block";
}

resetBtn.addEventListener("click",function(){ 
resetGame()
});

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijeras = document.getElementById("tijeras");
const lagarto = document.getElementById("lagarto");
const spock = document.getElementById("spock");


piedra.addEventListener("click", function(){
    mostrarResultado("piedra")
});
papel.addEventListener("click", function(){
    mostrarResultado("papel")
});
tijeras.addEventListener("click", function(){
    mostrarResultado("tijeras")
});
lagarto.addEventListener("click", function(){
    mostrarResultado("lagarto")
});
spock.addEventListener("click", function(){
    mostrarResultado("spock")
});