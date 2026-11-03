class Juego {
  constructor() {
    this.estado = 0;
    this.personaje = new Personaje();
    this.fondo = new Fondo();

    this.obstaculos = [];
    this.ingredientes = [];

    this.vidas = 3;
    this.cantidadIngredientes = 0;
    this.objetivo = 10;

    this.velocidad = 5;
    this.contador = 0;
  }

  iniciar() {
    this.personaje = new Personaje();
    this.fondo = new Fondo();

    this.obstaculos = [];
    this.ingredientes = [];

    this.vidas = 3;
    this.cantidadIngredientes = 0;
    this.contador = 0;
    this.velocidad = 5;

    this.estado = 2;
  }

  actualizar() {
    if (this.estado == 2) {
      this.contador++;

      this.personaje.actualizar();

      if (this.contador % 100 == 0) {
        let tipo = random(["suelo", "aire"]);
        this.obstaculos.push(new Obstaculo(tipo));
      }

      if (this.contador % 75 == 0) {
        this.ingredientes.push(new Ingrediente());
      }

// actualizar obstáculos
      for (let i = 0; i < this.obstaculos.length; i++) {
        let obstaculo = this.obstaculos[i];

        if (obstaculo.activo) {
          obstaculo.actualizar(this.velocidad);

          if (obstaculo.colisiona(this.personaje)) {
            this.vidas--;
            obstaculo.activo = false;
          }
          else if (obstaculo.x < -50) {
            obstaculo.activo = false;
          }
        }
      }

// actualizar ingredientes
      for (let i = 0; i < this.ingredientes.length; i++) {
        let ingrediente = this.ingredientes[i];

        if (ingrediente.activo) {
          ingrediente.actualizar(this.velocidad);

          if (ingrediente.colisiona(this.personaje)) {
            this.cantidadIngredientes++;
            ingrediente.activo = false;
          }
          else if (ingrediente.x < -50) {
            ingrediente.activo = false;
          }
        }
      }

      if (this.vidas <= 0) {
        this.estado = 4;
      }
      else if (this.cantidadIngredientes >= this.objetivo) {
        this.estado = 3;
      }
    }
  }

  mostrar() {
    if (this.estado == 0) {
      background(45, 30, 20);

      fill(255, 190, 60);
      textAlign(CENTER);
      textSize(42);
      text("DONKEY KONG", 400, 145);

      fill(255);
      textSize(20);
      text("Ayuda a Donkey Kong a preparar su torta", 400, 205);

      dibujarBoton(300, 260, 200, 55, "COMENZAR");
      dibujarBoton(300, 330, 200, 45, "CREDITOS");
    }

    else if (this.estado == 1) {
      background(45, 30, 20);

      fill(255, 190, 60);
      textSize(32);
      textAlign(CENTER);
      text("INSTRUCCIONES", 400, 90);

      fill(255);
      textSize(19);
      text("Presiona ESPACIO para saltar.", 400, 165);
      text("Esquiva los obstaculos.", 400, 205);
      text("Recolecta 10 bananas.", 400, 245);
      text("Tenes 3 vidas. No las pierdas.", 400, 285);

      dibujarBoton(300, 340, 200, 55, "JUGAR");
    }

    else if (this.estado == 2) {
      this.fondo.mostrar();

// dibujar obstáculos activos
      for (let i = 0; i < this.obstaculos.length; i++) {
        if (this.obstaculos[i].activo) {
          this.obstaculos[i].mostrar();
        }
      }

// dibujar ingredientes activos
      for (let i = 0; i < this.ingredientes.length; i++) {
        if (this.ingredientes[i].activo) {
          this.ingredientes[i].mostrar();
        }
      }

      this.personaje.mostrar();

      fill(30);
      textAlign(LEFT);
      textSize(19);
      text("Vidas: " + this.vidas, 20, 35);
      text("Bananas: " + this.cantidadIngredientes + " / " + this.objetivo, 20, 65);
    }

    else if (this.estado == 3) {
      background(100, 190, 100);

      fill(255);
      textAlign(CENTER);
      textSize(40);
      text("GANASTE", 400, 150);

      textSize(20);
      text("Conseguiste todos los ingredientes.", 400, 210);
      text("Ahora podes preparar la torta.", 400, 245);

      dibujarBoton(300, 290, 200, 50, "REINICIAR");
      dibujarBoton(300, 350, 200, 45, "CREDITOS");
    }

    else if (this.estado == 4) {
      background(150, 55, 45);

      fill(255);
      textAlign(CENTER);
      textSize(40);
      text("PERDISTE", 400, 150);

      textSize(20);
      text("No conseguiste todos los ingredientes.", 400, 210);
      text("Bananas: " + this.cantidadIngredientes + " / " + this.objetivo, 400, 245);

      dibujarBoton(300, 290, 200, 50, "REINTENTAR");
      dibujarBoton(300, 350, 200, 45, "CREDITOS");
    }

    else if (this.estado == 5) {
      background(45, 30, 20);

      fill(255, 190, 60);
      textAlign(CENTER);
      textSize(32);
      text("CREDITOS", 400, 110);

      fill(255);
      textSize(18);
      text("Alumnos: Felipe Ituarte y Jorge Manuel Moyano", 400, 190);
      text("Comision: Cuatro (4)", 400, 225);
      text("Docente: Leonardo Garay", 400, 260);

      dibujarBoton(300, 330, 200, 50, "VOLVER");
    }
  }

  click(x, y) {
    if (this.estado == 0) {
      if (botonPresionado(300, 260, 200, 55)) {
        this.estado = 1;
      }
      else if (botonPresionado(300, 330, 200, 45)) {
        this.estado = 5;
      }
    }

    else if (this.estado == 1) {
      if (botonPresionado(300, 340, 200, 55)) {
        this.iniciar();
      }
    }

    else if (this.estado == 3 || this.estado == 4) {
      if (botonPresionado(300, 290, 200, 50)) {
        this.iniciar();
      }
      else if (botonPresionado(300, 350, 200, 45)) {
        this.estado = 5;
      }
    }

    else if (this.estado == 5) {
      this.estado = 0;
    }
  }
}
