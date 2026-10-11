let pantalla = 0;

let Kong = [];
let cajatexto;
let botonmadera;
let imagenConvivencia;
let kongpensando;
let cocinando;
let excluido;
let enojado;
let fondo;
let secuestra;
let lleva;
let cimaa;
let va;
let lanza;
let rescatefinal;
let alejarse;
let seVaDeCasa;
let solociudad;
let problemas;
let independiza;
let jumpenojado;
let piensatorta;
let reconciliacion;
let entregatorta;
let entregatorta2;
let accidentetorta;

// CURSOR PERSONALIZADO
let cursorbanana;

// FUENTES
let fuentepantalla;
let fuenteMenu;

// SONIDO
let sonidoClick;
let musicaFondo;
let musicaIniciada = false;

let creditosY = 500;

// CARGAR IMAGENES, FUENTES Y SONIDOS
function preload() {
  fuentepantalla = loadFont("data/AdLib-18.ttf");
  fuenteMenu = loadFont("data/8-bit-hud.ttf");

  sonidoClick = loadSound("data/clickopcion.mp3");
  musicaFondo = loadSound("data/musicafondo.mp3");

  cursorbanana = loadImage("data/cursorbanana.png");

  for (let i = 1; i <= 4; i++) {
    Kong.push(loadImage("data/Kong" + i + ".png"));
  }

  imagenConvivencia = loadImage("data/donkeynormal.png");
  cajatexto = loadImage("data/cajatexto.png");
  botonmadera = loadImage("data/botonmadera.png");
  kongpensando = loadImage("data/KongPens.jpg");
  cocinando = loadImage("data/cocinando.jpg");
  excluido = loadImage("data/excluido.jpg");
  enojado = loadImage("data/enojado.jpg");
  fondo = loadImage("data/fondokong.jpg");
  secuestra = loadImage("data/secuestro.jpg");
  lleva = loadImage("data/lleva.jpg");
  cimaa = loadImage("data/cima.jpg");
  va = loadImage("data/va.jpg");
  lanza = loadImage("data/lanza.jpg");
  rescatefinal = loadImage("data/rescatefinal.jpg");
  alejarse = loadImage("data/alejarse.jpeg");
  seVaDeCasa = loadImage("data/sevadelacasa.jpeg");
  solociudad = loadImage("data/ciudad.jpg");
  problemas = loadImage("data/problemas.jpeg");
  independiza = loadImage("data/independiza.jpeg");
  jumpenojado = loadImage("data/jumpenojado.jpeg");
  piensatorta = loadImage("data/piensatorta.jpeg");
  entregatorta = loadImage("data/entregatorta.jpeg");
  accidentetorta = loadImage("data/accidentetorta.jpeg");
  entregatorta2 = loadImage("data/entregatorta2.jpeg");
  reconciliacion = loadImage("data/finalfeliz.jpeg");
}


function setup() {
  createCanvas(800, 450);
  textFont(fuentepantalla);
  noCursor();
}

function draw() {
  background(210);

//PANTALLAS
  if (pantalla == 0) {
    inicio();
  }
  else if (pantalla == 1) {
    convivencia();
  }
  else if (pantalla == 2) {
    exclusion();
  }
  else if (pantalla == 3) {
    ignora();
  }
  else if (pantalla == 4) {
    enoja();
  }
  else if (pantalla == 5) {
    soluciona();
  }
  else if (pantalla == 6) {
    eleccion();
  }
  else if (pantalla == 7) {
    seVaCasa();
  }
  else if (pantalla == 8) {
    ciudad();
  }
  else if (pantalla == 9) {
    encuentro();
  }
  else if (pantalla == 10) {
    secuestro();
  }
  else if (pantalla == 11) {
    edificio();
  }
  else if (pantalla == 12) {
    cocinaTorta();
  }
  else if (pantalla == 13) {
    terminaTorta();
  }
  else if (pantalla == 14) {
    accidente();
  }
  else if (pantalla == 15) {
    loEcha();
  }
  else if (pantalla == 16) {
    decisionTorta();
  }
  else if (pantalla == 17) {
    segundaTorta();
  }
  else if (pantalla == 18) {
    finalFeliz();
  }
  else if (pantalla == 19) {
    cima();
  }
  else if (pantalla == 20) {
    rescate();
  }
  else if (pantalla == 21) {
    barriles();
  }
  else if (pantalla == 22) {
    finalClasico();
  }
  else if (pantalla == 23) {
    finalSolitario();
  }
  else if (pantalla == 24) {
    creditos();
  }

  // DIBUJAR CURSOR
  imageMode(CORNER);
  image(cursorbanana, mouseX, mouseY, 32, 32);
}

// CLICK DEL MOUSE
function mousePressed() {
  cambiarPantalla();

  if (!musicaIniciada) {
    musicaFondo.play();
    musicaIniciada = true;
  }
}
