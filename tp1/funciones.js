function dibujarFondoZoomDerecha() {
  let zoom = 2.5;
  let anchoRecorte = fondoImg.width / zoom;
  let altoRecorte = fondoImg.height / zoom;

  imageMode(CORNER);

  image(
    fondoImg,
    0,
    0,
    width,
    height,
    fondoImg.width - anchoRecorte,
    0,
    anchoRecorte,
    altoRecorte
  );
}

function dibujarFondoZoomIzquierda() {
  let zoom = 2.5;
  let anchoRecorte = fondoImg.width / zoom;
  let altoRecorte = fondoImg.height / zoom;

  imageMode(CORNER);

  image(
    fondoImg,
    0,
    0,
    width,
    height,
    0,
    0,
    anchoRecorte,
    altoRecorte
  );
}

function dibujarFondoZoomIzquierdaSuave() {
  let zoom = 1.5;
  let anchoRecorte = fondoImg.width / zoom;
  let altoRecorte = fondoImg.height / zoom;

  let origenY = (fondoImg.height - altoRecorte) * 0.65;

  imageMode(CORNER);

  image(
    fondoImg,
    0,
    0,
    width,
    height,
    0,
    origenY,
    anchoRecorte,
    altoRecorte
  );
}

function dibujarFondoZoomDerechaSuaveMovimiento() {
  let zoom = 1.25;
  let anchoRecorte = fondoImg.width / zoom;
  let altoRecorte = fondoImg.height / zoom;

  let duracion = gogetaSalto.length * velocidadSalto;
  let progreso = (frameCount - inicioEstado) / duracion;

  if (progreso > 1) {
    progreso = 1;
  }

  let movimientoMaximo = fondoImg.height - altoRecorte;
  let origenY = lerp(movimientoMaximo, 0, progreso);

  imageMode(CORNER);

  image(
    fondoImg,
    0,
    0,
    width,
    height,
    fondoImg.width - anchoRecorte,
    origenY,
    anchoRecorte,
    altoRecorte
  );
}

function cargarFrames(ruta, cantidad, destino) {
  for (let i = 0; i < cantidad; i++) {
    destino.push(loadImage(ruta + i + ".png"));
  }
}

function obtenerIndice(frames, velocidad) {
  let tiempo = frameCount - inicioEstado;
  let indice = floor(tiempo / velocidad);

  if (indice >= frames.length) {
    indice = frames.length - 1;
  }

  return indice;
}

function obtenerIndiceCiclico(frames, velocidad) {
  return floor(frameCount / velocidad) % frames.length;
}

function dibujarSecuencia(frames, x, y, ancho, alto, velocidad) {
  let indice = obtenerIndice(frames, velocidad);

  imageMode(CENTER);
  image(frames[indice], x, y, ancho, alto);
}

function dibujarSecuenciaProporcionada(frames, x, y, alto, velocidad) {
  let indice = obtenerIndice(frames, velocidad);
  let frame = frames[indice];

  let ancho = alto * (frame.width / frame.height);

  imageMode(CENTER);
  image(frame, x, y, ancho, alto);
}

function dibujarSecuenciaProporcionadaCiclica(frames, x, y, alto, velocidad) {
  let indice = obtenerIndiceCiclico(frames, velocidad);
  let frame = frames[indice];

  let ancho = alto * (frame.width / frame.height);

  imageMode(CENTER);
  image(frame, x, y, ancho, alto);
}

function dibujarSecuenciaSalto(
  frames,
  x,
  yInicial,
  yFinal,
  alto,
  velocidad
) {
  let indice = obtenerIndice(frames, velocidad);
  let frame = frames[indice];

  let duracion = frames.length * velocidad;
  let progreso = (frameCount - inicioEstado) / duracion;

  if (progreso > 1) {
    progreso = 1;
  }

  let y = lerp(yInicial, yFinal, progreso);
  let ancho = alto * (frame.width / frame.height);

  imageMode(CENTER);
  image(frame, x, y, ancho, alto);
}

function secuenciaTerminada(frames, velocidad) {
  let tiempo = frameCount - inicioEstado;

  return tiempo >= frames.length * velocidad;
}
