class Rectangulo {
    calcularArea(base, altura) {
        console.log("Calculando Area de Rectangulo")
        console.log(`Area del Rectangulo: ${(base*2)+(altura*2)}`);
    }

    calcularPerimetro(base, altura) {
        console.log("Calculando Perimetrp de Rectangulo")
        console.log(`Perimetro del Rectangulo: ${base*altura}`);
    }
}


export default Rectangulo;