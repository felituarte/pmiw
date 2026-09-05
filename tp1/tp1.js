let fondoImg;
let audioSfx;

let gogetaAparicion = [];
let gogetaTransformacion = [];
let gogetaViendo = [];
let gogetaCargando = [];
let gogetaSalto = [];
let gogetaPoder = [];

let brolyEntrando = [];
let brolyHablando = [];
let brolyPoder = [];
let brolyEspalda = [];

let estado = 0;
let inicioEstado = 0;

let velocidadAparicion = 8;
let velocidadTransformacion = 8;
let velocidadViendo = 8;
let velocidadCarga = 12;
let velocidadBroly = 8;
let velocidadBrolyHablando = 14;
let velocidadSalto = 8;
let velocidadPoder = 8;
let velocidadBrolyPoder = 7;
let velocidadBrolyEspalda = 8;

let xBrolyInicial = -250;
let xBrolyFinal = 220;

function preload() {
  fondoImg = loadImage("data/trabajo/fondos/fondodbs.png");
  audioSfx = loadSound("data/trabajo/audiosfx.mp3");

  cargarFrames("data/trabajo/gogetaaparicion/goapa_", 5, gogetaAparicion);
  cargarFrames("data/trabajo/gogetatransform/gogetassj_", 13, gogetaTransformacion);
  cargarFrames("data/trabajo/gogetaviendo/gogetaver_", 13, gogetaViendo);
  cargarFrames("data/trabajo/gogetacargando/gogecarga_", 17, gogetaCargando);
  cargarFrames("data/trabajo/gogetasalto/gosalto_", 12, gogetaSalto);
  cargarFrames("data/trabajo/gogetapoder/gopoder_", 28, gogetaPoder);

  cargarFrames("data/trabajo/brolycaminando/broentrando_", 18, brolyEntrando);
  cargarFrames("data/trabajo/brolyhablando/brohablando_", 19, brolyHablando);
  cargarFrames("data/trabajo/brolypoder/bropoder_", 32, brolyPoder);
  cargarFrames("data/trabajo/brolypoder2/broespalda_", 14, brolyEspalda);
}

function setup() {
  createCanvas(800, 600);

  estado = 0;
  inicioEstado = frameCount;

  audioSfx.setVolume(0.3);
}

function draw() {
  if (estado == 2 || estado == 6) {
    dibujarFondoZoomDerecha();

  } else if (estado == 4 || estado == 7) {
    dibujarFondoZoomIzquierda();

  } else if (estado == 8 || estado == 9) {
    dibujarFondoZoomIzquierdaSuave();

  } else if (estado == 5) {
    dibujarFondoZoomDerechaSuaveMovimiento();

  } else {
    imageMode(CORNER);
    image(fondoImg, 0, 0, width, height);
  }

  if (estado == 0) {
    dibujarSecuencia(
      gogetaAparicion,
      650,
      400,
      280,
      280,
      velocidadAparicion
    );

    if (secuenciaTerminada(gogetaAparicion, velocidadAparicion)) {
      estado = 1;
      inicioEstado = frameCount;
    }

  } else if (estado == 1) {
    dibujarSecuenciaProporcionada(
      gogetaTransformacion,
      650,
      400,
      200,
      velocidadTransformacion
    );

    if (secuenciaTerminada(gogetaTransformacion, velocidadTransformacion)) {
      estado = 2;
      inicioEstado = frameCount;
    }

  } else if (estado == 2) {
    dibujarSecuencia(
      gogetaViendo,
      width / 2,
      height / 2,
      width,
      height,
      velocidadViendo
    );

    if (secuenciaTerminada(gogetaViendo, velocidadViendo)) {
      estado = 3;
      inicioEstado = frameCount;
    }

  } else if (estado == 3) {
    dibujarSecuenciaProporcionadaCiclica(
      gogetaCargando,
      650,
      400,
      200,
      velocidadCarga
    );

    let tiempoEntrada = frameCount - inicioEstado;
    let duracionEntrada = brolyEntrando.length * velocidadBroly;
    let avance = tiempoEntrada / duracionEntrada;

    if (avance > 1) {
      avance = 1;
    }

    let xBroly = lerp(xBrolyInicial, xBrolyFinal, avance);

    dibujarSecuenciaProporcionada(
      brolyEntrando,
      xBroly,
      450,
      190,
      velocidadBroly
    );

    if (secuenciaTerminada(brolyEntrando, velocidadBroly)) {
      estado = 4;
      inicioEstado = frameCount;
    }

  } else if (estado == 4) {
    dibujarSecuencia(
      brolyHablando,
      width / 2,
      height / 2,
      width,
      height,
      velocidadBrolyHablando
    );

    if (secuenciaTerminada(brolyHablando, velocidadBrolyHablando)) {
      estado = 5;
      inicioEstado = frameCount;
    }

  } else if (estado == 5) {
    dibujarSecuenciaSalto(
      gogetaSalto,
      width / 2,
      520,
      250,
      220,
      velocidadSalto
    );

    if (secuenciaTerminada(gogetaSalto, velocidadSalto)) {
      estado = 6;
      inicioEstado = frameCount;
    }

  } else if (estado == 6) {
    dibujarSecuencia(
      gogetaPoder,
      width / 2,
      height / 2,
      width,
      height,
      velocidadPoder
    );

    if (secuenciaTerminada(gogetaPoder, velocidadPoder)) {
      estado = 7;
      inicioEstado = frameCount;
    }

  } else if (estado == 7) {
    dibujarSecuencia(
      brolyPoder,
      width / 2,
      height / 2,
      width,
      height,
      velocidadBrolyPoder
    );

    if (secuenciaTerminada(brolyPoder, velocidadBrolyPoder)) {
      estado = 8;
      inicioEstado = frameCount;
    }

  } else if (estado == 8) {
    dibujarSecuencia(
      brolyEspalda,
      width / 2,
      height / 2,
      width,
      height,
      velocidadBrolyEspalda
    );

    if (secuenciaTerminada(brolyEspalda, velocidadBrolyEspalda)) {
      estado = 9;
      inicioEstado = frameCount;
    }

  } else if (estado == 9) {
    imageMode(CENTER);
    image(
      brolyEspalda[brolyEspalda.length - 1],
      width / 2,
      height / 2,
      width,
      height
    );
  }
}

function keyPressed() {
  if (key == "r" || key == "R") {

    estado = 0;
    inicioEstado = frameCount;

    userStartAudio();

    if (audioSfx.isPlaying()) {
      audioSfx.stop();
    }

    audioSfx.play();
  }
}
