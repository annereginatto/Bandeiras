var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

function brazilianFlag() {
    brush.fillStyle = "green";
    brush.fillRect(0, 0, 600, 400);

    brush.fillStyle = "yellow";
    brush.beginPath();
    brush.moveTo(300, 50);
    brush.lineTo(50, 200);
    brush.lineTo(550, 200);
    brush.fill();

    brush.beginPath();
    brush.moveTo(50, 200);
    brush.lineTo(300, 350);
    brush.lineTo(550, 200);
    brush.fill();

    brush.fillStyle = "darkblue";
    brush.beginPath();

    brush.arc(300, 200, 100, 0, 2 * Math.PI);
    brush.fill();
}

function germanFlag() {
    brush.fillStyle = "black";
    brush.fillRect(0, 0, 600, 133);

    brush.fillStyle = "red";
    brush.fillRect(0, 133, 600, 133);

    brush.fillStyle = "yellow";
    brush.fillRect(0, 266, 600, 134);
}

var counter = 1;
function changeFlags() {
    if (counter == 1) {
        germanFlag();
        counter++;
    } else if (counter == 2) {
        brazilianFlag();
        counter = 1;
    }
}

brazilianFlag();

setInterval(changeFlags, 3000);
//Para inverter um boolean, faz-se através do operador lógico NOT (!), p ex mostraBrasil = !mostraBrasil; (ao invés de escrever mostraBrasil = true e após mostraBrasil = false; essa forma inverte "automaticamente");