let juego;

function setup() {
  createCanvas(800, 450);
  juego = new Juego();
}

function draw() {
  juego.mostrar();
  juego.actualizar();
}

// el "" no esta vacio, es la barra espaciadora
function keyPressed() {
  if (key == " " && juego.estado == 2) {
    juego.personaje.saltar();
  }
}

function mousePressed() {
  juego.click(mouseX, mouseY);
}

function dibujarBoton(x, y, ancho, alto, textoBoton) {
  fill(230, 170, 65);
  stroke(90, 55, 20);
  strokeWeight(2);
  rect(x, y, ancho, alto, 10);

  fill(50);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(17);
  text(textoBoton, x + ancho / 2, y + alto / 2);
}

function botonPresionado(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho &&
         mouseY > y && mouseY < y + alto;
}
