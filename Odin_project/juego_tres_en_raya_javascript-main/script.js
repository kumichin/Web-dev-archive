
/*
Lista de Variables
*/

let turno = 1;  //determina a quien le toca en cada turno. si es 1 le toca a X y asi.
let fichas = ["O", "X"]; // las fichas del juego.
let puestas = 0; //inicializada a 0, ayuda a saber cuantas fichas he puesto, si he puesto 9 fichas, se podria decir que la partida ha terminado.
let partidaAcabada = false; //determina si la partida ha finalizada, sea quien sea quien haya ganado.
let textoVictoria = document.getElementById("textoVictoria"); //asociacion de la frase de victoria con el javascript para que salga cuando tiene que hacerlo.
let textoPerdida = document.getElementById("textoPerdida");
let botones = Array.from(document.getElementsByTagName("button")); //esto hay que cambiarlo porque yo tendré más botones pero es bueno saberlo
/*
esto se hace para coger todos los botones y convertirlos en un array, aunque realmente no los convierte en un array sino en una estructura
que se llama html collector (la fución getElementByTagName), y para que sea un array de toda la vida se usa array.from. coge una colecion de html y lo convierte en un array de javascript
*/
botones.forEach( x => x.addEventListener("click", ponerFicha));
/*por cada boton con la función forEach se pide que al hacer click en cada uno de los botones, se ejecute la función ponerFicha */


/*
función ponerFicha
*/

function ponerFicha(event){ //con parametro event que tiene datos del evento que he invocado al poner ficha,e decir, el click sobre el boton
    let botonPulsado = event.target; //target hace alución al objeto sobre el que se ha desencadenado el evento en este caso botonPulsado
    if(!partidaAcabada && botonPulsado.innerHTML == ""){/* el html del boton pasa a colocar la letra del turno*/ //al presionar una casilla nos tenemos que asegurar que la partida no ha acabado y que el boton no ha sido pulsado ya con esta condición if
        //se comprueba que el boton no ha sido pulsado coomprobando que la casilla no tenga texto.
        botonPulsado.innerHTML = fichas[turno]; //esto es que al cumplise se pinta el cuadro con el elemento del array fichas que corresponda (X, O),
        puestas += 1; //incrementamos en 1 la variable puestas al poner la ficha

        let estadoPartida = estado();
        /*esta variable almacena el valor de la función estado que devuelve un 0 si nadie ha ganado, devuelve un 1 si he ganado yo y devuelve un -1 si ha ganado la cpu*/
        if(estadoPartida == 0){ //siempre hay que comprobar el estado de la partida, si es igual a 0 significa que el juego continua y por tanto llamamos a la función cambiar turno
            cambiarTurno();
            if(puestas < 9){ //esto verifica que no ha ganado nadie ( que el tablero no este totalmente lleno de fichas)
                ia();
                estadoPartida = estado();
                puestas += 1;
                cambiarTurno();
            }
        }
        if(estadoPartida == 1){
        textoVictoria.style.visibility = "visible";
        partidaAcabada = true;
    }
    else if(estadoPartida == -1){
        // textoVictoria.style.innerHTML = "Has perdido";
        textoPerdida.style.visibility = "viSible";
        partidaAcabada = true;

    }
    }
}


function cambiarTurno(){
    if(turno == 1){
        turno = 0;
    }else{
        turno = 1;
    }

    /*
    otra forma de hacerlo
    turno += 1;
    turno %= 2;
    */
}


/*funcion estdo que determina cuando se gana o no.
hay 8 posibles formas de ganar en este juego y hay que entender que aunque haya 9 botones para la maquina son 8 porque empieza a contar desde el 0 */
function estado(nEstado){
    posicionVictoria = 0; //inicializada en 0, no solo va a decir si ha habido victoria sino tb en que fila o columna se produce
    nEstado = 0; //esta variable es 0 si la partida continua, 1 si he ganado yo y -1 si gana la cpu

    function sonIguales (...args){ //funcion que verifica que los n parametros que le paso son iguales o diferentes entre si.
        //pongo ... porque no se cuantos elementos son iguales y no determino numero de elementos.
        valores = args.map(x => x.innerHTML);
        if(valores[0] != "" && valores.every((x, i, arr) => x === arr [0])){ // la condicion dice que si el valor 0 no esta vacio y todos los elementos son iguales al valor 0
            args.forEach(x => x.style.backgroundColor = "Fuchsia") //los pinta todos de fuchsia
            return true;
        }
        else{
            return false;
        }
    }
    //una vez determinado en la funcion anterior que tienen que ser iguales los 3 elementos y que se hace con ellos, paso a determinar las condiciones de victorias.
    //comprobamos si hay alguna linea ganadora, las opciones de ganar en linea
    if(sonIguales(botones[0], botones[1], botones[2])){
        posicionVictoria = 1;
    }else if (sonIguales(botones[3], botones[4], botones[5])){
        positionVictoria = 2;
    }else if (sonIguales(botones[6], botones[7], botones[8])){
        positionVictoria = 3;
    }else if (sonIguales(botones[0], botones[3], botones[6])){
        positionVictoria = 4;
    }else if (sonIguales(botones[1], botones[4], botones[7])){
        positionVictoria = 5;
    }else if (sonIguales(botones[2], botones[5], botones[8])){
        positionVictoria = 6;
    }else if (sonIguales(botones[0], botones[4], botones[8])){
        positionVictoria = 7;
    }else if (sonIguales(botones[2], botones[4], botones[6])){
        positionVictoria = 8;
    }

    //comprobación de quién ha ganado
    if(posicionVictoria > 0){ //esto se comprueba porque si es mayor que 0 es que alguien ha ganado
        if(turno == 1){
            nEstado = 1; //en este caso he ganado yo
        }else{
            nEstado = -1; //en este caso ha ganado la maquina
        }

    }return nEstado;

}







function ia(){ //selecciona una casilla aleatoria
    function aleatorio(min, max){ // me devuelve un valor aleatorio entre el min y el maximo
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }// Math.random devuelve un numero aleatorio entre 0 y 1
    //cuando se quiere un maximo y un minimo se hace lo de arriba y es que se comienza con el minimo y a ese minimo se le suma la diferencia entre el max y el minimo + 1
    let valores = botones.map(x => x.innerHTML); //el map es para sacar el valor de los botones
    let pos = -1;
    if(valores[4] == ""){//primero comprueba si esta el centro libre para ponerse ahi porque es el que mas posibilidades tiene de ganar
        pos = 4; //elijo la posicion -1 que es una posicion que no existe
    }else{ //si el centro no esta libre crea una aleatoriedad.
        let n = aleatorio(0, botones.length -1); //crea un numero aleatorio entre 0 y el numero de botones porque los botones comienzan por 0
        while(valores[n] != ""){ //comprueba si ese espacio esta libre, si no lo esta vuelve a generar otro numero aleatorio
            n = aleatorio(0, botones.length-1);
        }pos = n;
    }
    botones[pos].innerHTML = "O";
    return pos;
}
