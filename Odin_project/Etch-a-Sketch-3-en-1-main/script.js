
/*INCOMPLETO, LOS BOTONES PARA DIBUJAR MULTICOLOR Y EN TONOS GRISACEOS AUN NO HECHOS. INTENCION DE CORREGIR EN EL FUTURO */


/*Control de cuando esta el ratón arrstrandose con el botón clickeado o no */

let isDragging = false;

/*Asignación de los botones por id */

const sombras = document.getElementById("sombreado");

const defaultGridSize = 16;

const eraser = document.getElementById("eraser");

function createSingleGrid(className, colNum, size) {
    let div = document.createElement("div");
    div.className = className + "_column" + colNum;
    div.id = "single_grid";
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = "white";
    div.style.border = "none";
    return div;
}

/* 
* Creates a row x column grid inside given container
*/
function createGrid(row, column, container, size) {
    for (let i = 0; i < row; ++i) {
        let rowDiv = document.createElement("div");
        rowDiv.id = "row_grid";
        rowDiv.className = `row${i}`;
        for (let j = 0; j < column; ++j) {
            let single_grid = createSingleGrid(rowDiv.className, j, size);
            rowDiv.appendChild(single_grid);
        }
        rowDiv.style.display = "flex";
        container.appendChild(rowDiv);
    }
    return container;
}


function createCustomGrid(slider_value) {
    const container = document.getElementById("grid");
    container.innerHTML = "";
    var width = container.clientWidth;

    let grid_size = width / slider_value;

    createGrid(slider_value, slider_value, container,  grid_size);
}


function createDefaultGrid() {
    createCustomGrid(16);
}


function showSliderValue() {
    const sliderLabel = document.querySelector(".grid-size-label");
    let sliderValue = getSliderValue();
    sliderLabel.textContent = `${sliderValue} x ${sliderValue}`;
}


 function drawColor(event, color) {
     event.target.style.backgroundColor = color;
 }




function getColor() {
    return document.querySelector("#color-selection").value;
}


function getSliderValue() {
    return document.getElementById("grid-slider").value;
}

// function arcoiris(){
//     this.style.opacity = parseFloat(Math.random());
//      this.style.backgroundColor = "rgb(" + getColor(0,255) + ", " + getColor(0,255) + ", " + getColor(0,255) + ")" ;
//     return document.getElementById("arcoiris").value;
// }

const grid_slider = document.querySelector("#grid-slider");
grid_slider.addEventListener("input", function() {
    createCustomGrid(getSliderValue());
    showSliderValue();
});


document.addEventListener('mousedown', function(event) {
    if (event.target.id === "single_grid") {
        if (eraser.value === "clicked") {
            drawColor(event, "white");
        }
        else {
             isDragging = true;
             drawColor(event, getColor());
        }
    }
});


document.addEventListener('mouseover', function(event) {
    if (isDragging && event.target.id === "single_grid") {
        drawColor(event, getColor());
    }
    else if (!isDragging && event.target.id === "single_grid" && eraser.value === "clicked") {
        drawColor(event, "white")
    }
    else {
        isDragging = false;
    }
});


document.addEventListener('mouseup', function() {
    isDragging = false;
});


eraser.addEventListener("click", function(event) {
    if (event.target.value === "unclicked") {
        eraser.value = "clicked";
        eraser.style.backgroundColor = "#5E4159";
    }
    else {
        eraser.value = "unclicked";
        eraser.style.backgroundColor = "#705C73";
    }
});


const clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    let allSingleGrids = document.querySelectorAll("#single_grid");

    for (let single_grid of allSingleGrids) {
        single_grid.style.backgroundColor = "white";
    }
});





document.addEventListener("DOMContentLoaded", function() {
    createDefaultGrid();
    showSliderValue();
});