/* Game snake desenvolvimento html com javascript
Autor: Diogo Magalhaes
e-mail: ddiogorj@gmail.com */

let canvas = document.getElementById( "snake" );
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

//Define tamanho maximo do corpo da cobra com as dimensões 8 * box  
snake[0] = {
    x: 8 * box,
    y: 8 * box 
}

function criarBG() {
    context.fillStyle = "Lightgreen";
    context.fillRect (0, 0, 16 * box, 16 * box);
}

// cria a cobrinha 
function criaSnake() {
    for(let i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect (snake[i].x , snake[i].y, box, box);
    }
}

criarBG();
criaSnake();
