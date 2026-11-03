class Ingrediente {
  constructor() {
    this.x = 850;
    this.y = random(285, 335);
    this.tamaño = 25;
    this.activo = true;
  }

  actualizar(velocidad) {
    this.x -= velocidad;
  }

  mostrar() {
    fill(255, 220, 20);
    stroke(180, 130, 0);
    strokeWeight(2);

    rectMode(CENTER);
    rect(this.x, this.y, this.tamaño, this.tamaño);
    rectMode(CORNER);

    noStroke();
  }

  colisiona(personaje) {
    let distancia = dist(this.x, this.y, personaje.x, personaje.y);

    return distancia < personaje.radio + this.tamaño / 2;
  }
}
