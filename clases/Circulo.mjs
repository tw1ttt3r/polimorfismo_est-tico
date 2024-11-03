class Circulo {
    pi = 3.1416;
    radio = null;

    constructor(radio) {
        this.radio = radio;
    }

    calcularArea() {
        console.log("Calculando Area de Círculo")
        console.log(`Area del Círculo: ${this.pi*(this.radio*this.radio)}`);
    }

    calcularPerimetro() {
        console.log("Calculando Area de Círculo")
        console.log(`Area del Círculo: ${(2*this.pi)*this.radio}`);
    }
}

export default Circulo;