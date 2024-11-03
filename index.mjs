import Cuadrado from "./clases/Cuadrado.mjs";
import Circulo from "./clases/Circulo.mjs";
import Rectangulo from "./clases/Rectangulo.mjs";

const figura1 = new Cuadrado();
const figura2 = new Rectangulo();

console.log("Calculos del cuadrado");
console.log("Lado: 6");
console.log(`Perimetro: ${figura1.calcularPerimetro(6)}`);
console.log(`Area: ${figura1.calcularArea(6)}`);

console.log("Calculos del Rectangulo");
console.log("Base: 6");
console.log("Altura: 10");
console.log(`Perimetro: ${figura2.calcularPerimetro(6, 10)}`);
console.log(`Area: ${figura2.calcularArea(6, 10)}`);

console.log("Calculos del Circulo");
console.log("Radio: 4.5");
const figura3 = new Circulo(4.5);
console.log(`Perimetro: ${figura3.calcularPerimetro()}`);
console.log(`Area: ${figura3.calcularArea()}`);