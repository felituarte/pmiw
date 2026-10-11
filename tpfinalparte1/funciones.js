// BOTON
function boton(x, y, ancho, alto, contenido) {
  let mouseEncima =
    mouseX > x &&
    mouseX < x + ancho &&
    mouseY > y &&
    mouseY < y + alto;

  let escala = 1;

  if (mouseEncima) {
    escala = 1.16;
  }

  // IMAGEN DEL BOTON
  imageMode(CENTER);
  image(
    botonmadera,
    x + ancho / 2,
    y + alto / 2,
    ancho * 2 * escala,
    alto * 3 * escala
  );
  imageMode(CORNER);

  // TEXTO DEL BOTON
  fill(255);
  textFont(fuentepantalla);
  textAlign(CENTER, CENTER);

  if (mouseEncima) {
    textSize(17);
  } else {
    textSize(16);
  }

  text(contenido, x + ancho / 2, y + alto / 2);
}

// TEXTOS
function texto(contenido, y) {
  fill(0);
  textFont(fuentepantalla);
  textAlign(CENTER, CENTER);
  textSize(18);
  text(contenido, 400, y);
}

function titulo(contenido) {
  fill(250);
  textFont(fuentepantalla);
  textAlign(CENTER, CENTER);
  textSize(32);
  text(contenido, 400, 40);
}

// DETECTAR CLICK BOTON
function clicBoton(x, y, ancho, alto) {
  if (
    mouseX > x &&
    mouseX < x + ancho &&
    mouseY > y &&
    mouseY < y + alto
  ) {
    if (sonidoClick) {
      sonidoClick.stop();
      sonidoClick.play();
    }

    return true;
  }

  return false;
}

function elementosInterfaz() {
  image(cajatexto, 100, 205, 600, 330);
}

// PANTALLA 0 - MENU INICIAL
function inicio() {
  image(fondo, 0, 0, 800, 450);
  image(Kong[floor(frameCount / 10) % 4], 370, 240, 80, 80);

  textFont(fuenteMenu);
  textAlign(CENTER, CENTER);
  noStroke();

// OPCION INICIAR
  if (
    mouseX > 250 &&
    mouseX < 550 &&
    mouseY > 320 &&
    mouseY < 360
  ) {
    fill(255, 220, 80);
    textSize(24);
  } else {
    fill(255);
    textSize(20);
  }

  text("INICIAR", 400, 340);

  // OPCION CREDITOS
  if (
    mouseX > 250 &&
    mouseX < 550 &&
    mouseY > 365 &&
    mouseY < 405
  ) {
    fill(255, 220, 80);
    textSize(24);
  } else {
    fill(255);
    textSize(20);
  }

  text("CREDITOS", 400, 385);

//FUENTE DEL JUEGO
  textFont(fuentepantalla);
}

// PANTALLA 1
function convivencia() {
  image(imagenConvivencia, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Viven juntos Donkey Kong, JumpMan y Pauline.", 365);

  boton(300, 395, 200, 50, "SIGUIENTE");
}

// PANTALLA 2
function exclusion() {
  image(excluido, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong comienza a sentirse excluido.", 345);
  texto("JumpMan y Pauline pasan cada vez", 365);
  texto("menos tiempo con él.", 385);

  boton(300, 395, 200, 50, "SIGUIENTE");
}

// PANTALLA 3
function ignora() {
  image(alejarse, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong decide ignorar lo que sucede.", 355);
  texto("En lugar de enfrentarse a ellos, decide alejarse.", 375);

  boton(300, 395, 200, 50, "SIGUIENTE");
}

// PANTALLA 4
function enoja() {
  image(enojado, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong se enoja con JumpMan.", 355);
  texto("Decide enfrentarse a él por haberlo excluido.", 375);

  boton(300, 395, 200, 50, "SIGUIENTE");
}

// PANTALLA 5
function soluciona() {
  image(piensatorta, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong intenta solucionar las cosas.", 345);
  texto("Piensa en una forma de reconciliarse con ellos.", 365);
  texto("Entonces decide hacer una torta de bananas.", 385);

  boton(300, 395, 200, 50, "SIGUIENTE");
}

// PANTALLA 6
function eleccion() {
  image(kongpensando, 0, 0, 800, 450);
  elementosInterfaz();

  texto("¿Cómo reacciona Donkey Kong?", 365);

  boton(60, 390, 210, 65, "LO IGNORA");
  boton(295, 390, 210, 65, "SE ENOJA");
  boton(530, 390, 230, 65, "SOLUCIONAR");
}

// PANTALLA 7
function seVaCasa() {
  image(seVaDeCasa, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong decide abandonar el lugar donde vive.", 355);
  texto("Cansado de la situación, se marcha solo.", 375);

  boton(300, 395, 200, 50, "SIGUIENTE");
}

// PANTALLA 8
function ciudad() {
  image(solociudad, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong llega a la ciudad sin compañía.", 355);
  texto("Mientras camina, se encuentra con algo inesperado.", 375);

  boton(300, 395, 200, 50, "CONTINUAR");
}

// PANTALLA 9
function encuentro() {
  image(problemas, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong encuentra a JumpMan", 345);
  texto("y Pauline en problemas.", 365);
  texto("¿Qué decide hacer?", 385);

  boton(60, 390, 210, 65, "LOS IGNORA");
  boton(295, 390, 210, 65, "SALVARLOS");
  boton(530, 390, 230, 65, "VENGANZA");
}

// PANTALLA 10
function secuestro() {
  image(secuestra, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong se enfrenta a JumpMan.", 355);
  texto("¿Decide llevarse a Pauline por la fuerza?", 375);

  boton(180, 395, 180, 60, "SI");
  boton(440, 395, 180, 60, "NO");
}

// PANTALLA 11
function edificio() {
  image(lleva, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong lleva a Pauline a un edificio.", 355);
  texto("Comienza a subir hasta llegar a la cima.", 375);

  boton(300, 395, 200, 50, "CONTINUAR");
}

// PANTALLA 12
function cocinaTorta() {
  image(cocinando, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong reúne los ingredientes necesarios.", 355);
  texto("Quiere sorprender a sus amigos y reconciliarse.", 375);

  boton(300, 395, 200, 50, "CONTINUAR");
}

// PANTALLA 13
function terminaTorta() {
  image(entregatorta, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong termina de preparar la torta.", 355);
  texto("Ahora va a entregársela a JumpMan y Pauline.", 375);

  boton(300, 395, 200, 50, "ENTREGAR");
}

// PANTALLA 14
function accidente() {
  image(accidentetorta, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong se resbala con una cáscara de banana.", 355);
  texto("La torta cae sobre la cara de JumpMan.", 375);

  boton(300, 395, 200, 50, "CONTINUAR");
}

// PANTALLA 15
function loEcha() {
  image(jumpenojado, 0, 0, 800, 450);
  elementosInterfaz();

  texto("JumpMan, furioso por el accidente, echa a Donkey Kong.", 355);
  texto("Donkey Kong debe decidir qué hacer ahora.", 375);

  boton(300, 395, 200, 50, "DECIDIR");
}

// PANTALLA 16
function decisionTorta() {
  image(kongpensando, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Puede marcharse o intentarlo una vez más.", 355);
  texto("Su decisión cambiará el final de la historia.", 375);

  boton(100, 390, 250, 65, "SE VA");
  boton(450, 390, 250, 65, "INTENTA DE NUEVO");
}

// PANTALLA 17
function segundaTorta() {
  image(entregatorta2, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong decide preparar otra torta.", 355);
  texto("Esta vez espera que todo salga bien.", 375);

  boton(300, 395, 200, 50, "CONTINUAR");
}

// PANTALLA 18
function finalFeliz() {
  image(reconciliacion, 0, 0, 800, 450);
  elementosInterfaz();

  titulo("FINAL");
  texto("Donkey Kong se disculpa con sus amigos.", 345);
  texto("Los tres hablan y finalmente se reconcilian.", 365);
  texto("La amistad vuelve a unirlos.", 385);

  boton(300, 395, 200, 50, "VOLVER AL INICIO");
}

// PANTALLA 19
function cima() {
  image(cimaa, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong llega a lo más alto del edificio.", 355);
  texto("Pauline está allí y JumpMan se acerca.", 375);

  boton(300, 395, 200, 50, "CONTINUAR");
}

// PANTALLA 20
function rescate() {
  image(va, 0, 0, 800, 450);
  elementosInterfaz();

  texto("JumpMan llega al edificio para rescatar a Pauline.", 355);
  texto("Donkey Kong intenta impedir que se acerque.", 375);

  boton(300, 395, 200, 50, "CONTINUAR");
}

// PANTALLA 21
function barriles() {
  image(lanza, 0, 0, 800, 450);
  elementosInterfaz();

  texto("Donkey Kong comienza a lanzar barriles.", 355);
  texto("JumpMan intenta esquivarlos para llegar hasta Pauline.", 375);

  boton(300, 395, 200, 50, "SIGUIENTE");
}

// PANTALLA 22
function finalClasico() {
  image(rescatefinal, 0, 0, 800, 450);
  elementosInterfaz();

  titulo("FINAL");
  texto("JumpMan esquiva los barriles.", 345);
  texto("Finalmente logra rescatar a Pauline.", 365);
  texto("La aventura termina como en el juego clásico.", 385);

  boton(300, 395, 200, 50, "VOLVER AL INICIO");
}

// PANTALLA 23
function finalSolitario() {
  image(independiza, 0, 0, 800, 450);
  elementosInterfaz();

  titulo("FINAL");
  texto("Donkey Kong decide alejarse de sus amigos.", 355);
  texto("Se independiza y se va a vivir solo.", 375);

  boton(300, 395, 200, 50, "VOLVER AL INICIO");
}

// PANTALLA 24
function creditos() {
  background(0);

  fill(255);
  textFont(fuentepantalla);
  textAlign(CENTER, CENTER);

  textSize(20);
  text("Aventura interactiva de Donkey Kong", 400, creditosY);
  text("Realizado por: Moyano Jorge 127005/4 e Ituarte Felipe 125601/0", 400, creditosY + 45);
  text("Obra original: Donkey Kong", 400, creditosY + 90);
  text("Creado originalmente por: Shigeru Miyamoto", 400, creditosY + 135);
  text("creó el personaje y el juego de arcade original", 400, creditosY + 170);
  text("lanzado por Nintendo en 1981", 400, creditosY + 210);

  creditosY--;

  if (creditosY < -200) {
    creditosY = 500;
  }

  boton(300, 380, 200, 45, "VOLVER AL INICIO");
}

// CAMBIAR DE PANTALLA SEGUN EL BOTON PULSADO
function cambiarPantalla() {
  if (pantalla == 0) {
    // INICIAR
    if (clicBoton(250, 320, 300, 40)) {
      pantalla = 1;
    }
    // CREDITOS
    else if (clicBoton(250, 365, 300, 40)) {
      pantalla = 24;
    }
  }
  else if (pantalla == 1) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 2;
  }
  else if (pantalla == 2) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 6;
  }
  else if (pantalla == 3) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 7;
  }
  else if (pantalla == 4) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 10;
  }
  else if (pantalla == 5) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 12;
  }
  else if (pantalla == 6) {
    if (clicBoton(60, 395, 210, 65)) pantalla = 3;
    else if (clicBoton(295, 395, 210, 65)) pantalla = 4;
    else if (clicBoton(530, 395, 230, 65)) pantalla = 5;
  }
  else if (pantalla == 7) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 8;
  }
  else if (pantalla == 8) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 9;
  }
  else if (pantalla == 9) {
    if (clicBoton(60, 390, 210, 65)) pantalla = 23;
    else if (clicBoton(295, 390, 210, 65)) pantalla = 18;
    else if (clicBoton(530, 390, 230, 65)) pantalla = 11;
  }
  else if (pantalla == 10) {
    if (clicBoton(180, 395, 180, 60)) pantalla = 11;
    else if (clicBoton(440, 395, 180, 60)) pantalla = 8;
  }
  else if (pantalla == 11) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 19;
  }
  else if (pantalla == 12) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 13;
  }
  else if (pantalla == 13) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 14;
  }
  else if (pantalla == 14) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 15;
  }
  else if (pantalla == 15) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 16;
  }
  else if (pantalla == 16) {
    if (clicBoton(100, 395, 250, 65)) pantalla = 8;
    else if (clicBoton(450, 395, 250, 65)) pantalla = 17;
  }
  else if (pantalla == 17) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 18;
  }
  else if (pantalla == 18) {
    if (clicBoton(300, 395, 200, 50)) volverInicio();
  }
  else if (pantalla == 19) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 20;
  }
  else if (pantalla == 20) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 21;
  }
  else if (pantalla == 21) {
    if (clicBoton(300, 395, 200, 50)) pantalla = 22;
  }
  else if (pantalla == 22) {
    if (clicBoton(300, 395, 200, 50)) volverInicio();
  }
  else if (pantalla == 23) {
    if (clicBoton(300, 395, 200, 50)) volverInicio();
  }
  else if (pantalla == 24) {
    if (clicBoton(300, 380, 200, 45)) volverInicio();
  }
}

// VOLVER AL INICIO
function volverInicio() {
  pantalla = 0;
  creditosY = 500;
}
