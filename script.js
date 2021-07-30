//************************************************ */
/*  Game snake desenvolvimento html com javascript
    Autor: Diogo Magalhaes
    e-mail: ddiogorj@gmail.com */
//*********************************************** */
// variaveis globais definição da janela principal do jogo e bloco de contrução do cobra.
let canvas = document.getElementById( "snake" );
let context = canvas.getContext("2d");
let direction = "down"; // Definição de variaveis de movimento da cobra
let box = 32;
let snake = [];  //Define o corpo da cobra com as dimensões 8 * box

snake[0] = {
    x: 8 * box,
    y: 8 * box 
}

document.addEventListener('keydown', update);
setInterval(gameStart, 500);

// Criação da janela principal do jogo e do elemento basico que compõe a cobra. 
function criarBG() {
    context.fillStyle = "Lightgreen";
    context.fillRect (0, 0, 16 * box, 16 * box);
}
// cria a cobrinha 
function criaSnake() {
    for( i=0 ; i < snake.length ; i++ ) {
        context.fillStyle = "green";
        context.fillRect (snake[i].x , snake[i].y, box, box);
    }
}

function update(event) {
    switch (event.keyCode) {
        case 37: if(direction != "right") direction = "left"; break;
        case 38: if(direction != "down") direction = "up"; break;
        case 39: if(direction != "left") direction = "right"; break;
        case 40: if(direction != "up") direction = "down";  break;

        case 65: if(direction != "right") direction = "left"; break;
        case 87: if(direction != "down") direction = "up"; break;
        case 68: if(direction != "left") direction = "right"; break;
        case 83: if(direction != "up") direction = "down";  break;
        default: null;
    }
}

function moveSnake() {
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    };
    snake.unshift(newHead);
}

function infinityWall () {
    if ( snake[0].x > 15 * box && direction == "right" ) snake[0].x = 0;
    if ( snake[0].y > 15 * box && direction == "down" )  snake[0].y = 0;
    if ( snake[0].x < 0 && direction == "left" )         snake[0].x = 15 * box;
    if ( snake[0].y < 0 && direction == "up" )           snake[0].y = 15 * box;
    
}

function gameStart(){    
    infinityWall()
    criarBG()
    criaSnake()
    moveSnake()
}