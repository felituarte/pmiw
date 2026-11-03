class Personaje {
  
  constructor() {
    this.x = 120;
    this.y = 340;
    this.radio = 25;
    this.velocidadY = 0;
    this.gravedad = 0.8;
    this.suelo = 340;
    this.enSuelo = true;
  }

  saltar() {
    if (this.enSuelo) {
      this.velocidadY = -14;
      this.enSuelo = false;
    }
  }

  actualizar() {
    this.y += this.velocidadY;
    this.velocidadY += this.gravedad;

    if (this.y + this.radio >= 365) {
      this.y = this.suelo;
      this.velocidadY = 0;
      this.enSuelo = true;
    }
  }

  mostrar() {
    fill(120, 70, 30);
    noStroke();
    ellipse(this.x, this.y, this.radio * 2);
  }
}
