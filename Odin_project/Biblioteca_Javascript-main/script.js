// esto hace que el boton de "adopta un libro" abra la ventana de registro

const showButton = document.querySelector("#mostrar-dialogo");
showButton.addEventListener("click", function () {
  const alertDialog = document.querySelector("#alert-dialog");
  alertDialog.showModal();
});

// fin del boton que abre la ventana de registro


// funcion que habilita el boton de guardar
const guardar = document.querySelector("#guardar");
guardar.addEventListener("click", function(event){
  event.preventDefault();
  addBookToLibrary()
})





// array formado por los objetos que representan los libros

let myLibrary = [
  {
    title: "La casa de los amores imposibles",
    author: "Cristina López Barrio",
    pages: 477,
    sinopsis:
      "Las mujeres Laguna han soportado una terrible maldición desde el principio de su linaje: una tras otra sufren mal de amores y sólo alumbran niñas que perpetúan esta cruel hetencia. Pero cuando después de décadas de pasiones prohibidas y amores trágicos nace el primer varón, se abre la puerta de la esperanza. ¿Será éste el fin de la maldición?",
    read: "read",

    },
  {
    title: "Divergente",
    author: "Veronica Roth",
    pages: 464,
    sinopsis:
      "En el Chicago distópico de Beatrice Prior, la sociedad está dividida en cinco facciones, cada una de ellas dedicada a cultivar una virtud concreta: Verdad (los sinceros), Abnegación (los altruistas), Osadía (los valientes), Cordialidad (los pacíficos) y Erudición (los inteligentes). En una ceremonia anual, todos los chicos de dieciseis años deben decidir a que facción dedicarán el resto de sus vidas. Beatrice tiene que elegir entre quedarse con su familia o ser quien realmente es, no puede tener ambas cosas. Así que toma una decisión que sorprenderá a todo el mundo, incluida ella. Durante el competitivo proceso de iniciación posterior, Beatrice decide pasar a llamarse Tris e intenta averiguar quienes son sus verdaderos amigos, y dónde encaja en su vida enamorarse de un chico que unas veces resulta fascinante y otras la exaspera. Sin embargo, Tris tambien tiene un secreto, algo que no ha contado a nadie para no poner su vida en peligro. Cuando descubre un conflicto que amenaza con desbaratar la, en apariencia, perfecta sociedad en la que vive, tambien averigua que su secreto podría ser la clave para salvar a los que ama o... para acabar muerta.",
    read: "read",

    },
  {
    title: "El corredor del laberinto",
    author: "James Dashner",
    pages: 532,
    sinopsis:
      "Bienvenido al claro. Verás que una vez a la semana, siempre el mismo día y a la misma hora, nos llegan víveres. Una vez al mes, siempre el mismo día y a la misma hora, aparece un nuevo chico, como tú. Siempre un chico. Como ves, este lugar está cercado por muros de piedras. Has de saber que estos muros se abren por la mañana y se cierran por la noche, siempre a la hora exacta. Al otro lado se encuentra el laberinto. De noche, las puertas se cierran y, si quieres sobrevivir, no debes estar allí para entonces. Todo sigue un orden. y, sin embargo, al día siguiente suena una alarma. Significa que ha llegado alguien más. Para asombro de todos, es una chica. Su llegada vendrá acompañada de un mensaje que cambiará las reglas del juego. ¿Y si un día abrieras los ojos y te vieses en un lugar desconocido sin saber nada más que tu nombre? Cuando Thomas despierta, se encuentra en una especie de ascensor. No recuerda qué edad tiene, quién es ni cómo es su rostro. Sólo su nombre. De pronto, el ascensor da un zarandeo y se detiene. Las puertas se abren y una multitud de rostros le recibe. 'Bienvenido al Claro, dice uno de los adolescentes. Aquí es donde vivimos. Esta es nuestra casa. Fuera está el laberinto. Yo soy Alby; él, Newt. Y tú eres el primero desde que mataron a Nick'.",
    read: "read",

    },
  {
    title: "Cazadores de sombras",
    author: "Cassandra Clare",
    pages: 512,
    sinopsis:
      "En el Pandemonium, la discoteca de moda de Nueva York, Clary sigue a un atractivo chico de pelo azul hasta que presencia su muerte a manos de tres jóvenes cubiertos de extraños tatuajes. Desde esa noche, su destino se une al de esos tres cazadores de sombras, guerreros dedicados a liberar a la tierra de demonios y, sobre todo, al de Jace, un chico con aspecto de ángel y tendencia a actuar como un idiota...",
      read: "read",
    },
];


// function mostrarLibros(){
//   myLibrary.forEach(element => {
//     document.getElementById("seccionLibros").textContent = ;
//   });
  
// }



// fin del array de libros

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.sinopsis = sinopsis
   this.read = read;

}

Book.prototype.toggleRead = function(){
  this.read = !this.read;
 }
 
 function toggleRead(index){
   myLibrary[index].toggleRead();
   creadorLibreria();
 
 }

// funcion para controlar que los libros se añadan y como se añaden (control de la forma en que se añaden)

function creadorLibreria(){
  let fichasLibros = document.querySelector("#seccionLibros");
  fichasLibros.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let libro = myLibrary[i];
    let creacionLibro = document.createElement("div");
    creacionLibro.style.background = "white"
    creacionLibro.setAttribute = ("class", "book-card");
    creacionLibro.innerHTML = `
    <div class="card-header">
      <h3 class="title__book">${libro.title}</h3>
      <h5 class="author__book">${libro.author}</h5>
    </div>
    <div class="card__body">
      <p class="pages__book">${libro.pages} pages</p>
       <p class="read-status__book">${libro.read ? "Read" : "Not Read"}</p>
      <button class="btns_cards remove_btn" onclick="removeBook(${i})">Remove</button>
      <button class="btns_cards toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
    </div>`;

    fichasLibros.appendChild(creacionLibro);
    
  }
}

// funcion para eliminar de la lista de libros

function removeBook(index){
  myLibrary.splice(index, 1);
  creadorLibreria();
}

// funcion que asocia los campos del formulario con la matriz y añade los libros nuevos a ella

function addBookToLibrary() {
  const title = document.querySelector("#titulo").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const sinopsis = document.getElementById("sinopsis").value;
  // const read = document.getElementById("#read").checked;
  const newBook = new Book(title, author, pages, sinopsis);
 myLibrary.push(newBook);
 creadorLibreria();

}







