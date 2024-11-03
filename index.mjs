import Cuadrado from "./clases/Cuadrado.mjs";
import Circulo from "./clases/Circulo.mjs";
import Rectangulo from "./clases/Rectangulo.mjs";

const figura1 = new Cuadrado();
const figura2 = new Rectangulo();

console.log("Calculos del cuadrado");
console.log("Lado: 6");
figura1.calcularPerimetro(6)
figura1.calcularArea(6)

console.log("Calculos del Rectangulo");
console.log("Base: 6");
console.log("Altura: 10");
figura2.calcularPerimetro(6, 10)
figura2.calcularArea(6, 10)

console.log("Calculos del Circulo");
console.log("Radio: 4.5");
const figura3 = new Circulo(4.5);
figura3.calcularPerimetro()
figura3.calcularArea()