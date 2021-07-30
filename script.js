//************************************************ */
/*  Game snake desenvolvimento html com javascript
    Autor: Diogo Magalhaes
    e-mail: ddiogorj@gmail.com */
//*********************************************** */
// variaveis globais definição da janela principal do jogo e bloco de contrução do cobra.
let canvas = document.getElementById( "snake" );
let context = canvas.getContext("2d");
let imgbg = new Image();
imgbg.src = "img/img-bkg.jpeg";
let imgskin = new Image();
imgskin.src = "img/skin.jpeg";
let imgfood = new Image();
imgfood.src = "img/food.jpeg";
let direction = "down"; // Definição de variaveis de movimento da cobra
let box = 32;
let snake = [];  //Define o corpo da cobra com as dimensões 8 * 
snake[0] = {
    x: 8 * box,
    y: 8 * box 
}
let food = {
    x: Math.floor(Math.random() * 14 + 1) * box,
    y: Math.floor(Math.random() * 14 + 1) * box 
};

document.addEventListener('keydown', update);
let game = setInterval(gameStart, 200);

// Criação da janela principal do jogo e do elemento basico que compõe a cobra. 
function criarBG() {
    let pattern = context.createPattern(imgbg, "repeat");
    context.fillStyle = pattern;
    context.fillRect (0, 0, 16 * box, 16 * box);
}
// cria a cobrinha 
function criaSnake() {
    for( i=0 ; i < snake.length ; i++ ) {
        let pattern = context.createPattern(imgskin, "repeat");
        context.fillStyle = pattern;
        context.fillRect (snake[i].x , snake[i].y, box, box);
    }
}

function drawFood() {
    let pattern = context.createPattern(imgfood, "repeat");
    context.fillStyle = pattern;
    context.fillRect(food.x, food.y, box, box);  
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
    let pts = 0;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if( snakeX != food.x || snakeY != food.y) {
        snake.pop();
        pts = (i - 1) * 10;
        document.getElementById("points").innerText = "Pontos: " + pts;
    } else {
        food.x = Math.floor(Math.random() * 14 + 1) * box;
        food.y = Math.floor(Math.random() * 14 + 1) * box;
    }
    
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

function gameOver() {
    for (i = 1; i < snake.length; i++ ) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y ) {
            clearInterval(game);
            alert( 'Game Over :( ');
        } 
    }
} 

function gameStart(){   
    infinityWall()
    gameOver()
    criarBG()
    criaSnake()
    drawFood() 
    moveSnake()
}