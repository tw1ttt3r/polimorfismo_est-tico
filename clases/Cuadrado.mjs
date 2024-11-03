class Cuadrado {
    calcularArea(lado) {
        console.log("Calculando Area de Cuadrado")
        console.log(`Area del Cuadrado: ${(lado*4)}`);
    }

    calcularPerimetro(lado) {
        console.log("Calculando Perimetro de Cuadrado")
        console.log(`Area del Cuadrado: ${lado*lado}`);
    }
}

export default Cuadrado;