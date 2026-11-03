class Obstaculo {
  constructor(tipo) {
    this.x = 850;
    this.tipo = tipo;
    this.activo = true;

    if (this.tipo == "suelo") {
      this.y = 340;
      this.ancho = 45;
      this.alto = 45;
    }
    else {
      this.y = 270;
      this.ancho = 65;
      this.alto = 30;
    }
  }

  actualizar(velocidad) {
    this.x -= velocidad;
  }

  mostrar() {
    fill(180, 60, 40);
    stroke(90, 30, 20);
    strokeWeight(2);

    triangle(
      this.x - this.ancho / 2, this.y + this.alto / 2,
      this.x, this.y - this.alto / 2,
      this.x + this.ancho / 2, this.y + this.alto / 2
    );

    noStroke();
  }

  colisiona(personaje) {
    let izquierdaPersonaje = personaje.x - personaje.radio;
    let derechaPersonaje = personaje.x + personaje.radio;
    let arribaPersonaje = personaje.y - personaje.radio;
    let abajoPersonaje = personaje.y + personaje.radio;

    let izquierdaObstaculo = this.x - this.ancho / 2;
    let derechaObstaculo = this.x + this.ancho / 2;
    let arribaObstaculo = this.y - this.alto / 2;
    let abajoObstaculo = this.y + this.alto / 2;

    return derechaPersonaje > izquierdaObstaculo &&
           izquierdaPersonaje < derechaObstaculo &&
           abajoPersonaje > arribaObstaculo &&
           arribaPersonaje < abajoObstaculo;
  }
}
