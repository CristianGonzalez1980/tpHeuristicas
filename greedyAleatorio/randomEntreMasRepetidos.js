function randomEntreMasRepetidos(lineaDeTexto) {

    let mapaDeCaracteres = new Map();

    for (let caracter of lineaDeTexto) {
        if (!mapaDeCaracteres.has(caracter)) {
            mapaDeCaracteres.set(caracter, 0);
        }
        mapaDeCaracteres.set(caracter, mapaDeCaracteres.get(caracter) + 1);
    }

    let caracterMasRepetido = '';
    let maximoConteo = 0;

    for (let [caracter, conteo] of mapaDeCaracteres.entries()) {
        if (conteo > maximoConteo) {
            caracterMasRepetido = caracter;
            maximoConteo = conteo;
        }
    }

    //Estrategia para aleatorizar la salida del caracter entre los mas repetidos, que se encuentra en un rango de repeticiones que incian en la cantidad: maximoConteo / 2 hasta la cantidad: maximoConteo inclusive.
    let mitadEnteraDelMaximo = Math.floor(maximoConteo / 2);
    let masRepetidos = []

    for (let [caracter, conteo] of mapaDeCaracteres.entries()) {
        if (conteo >= mitadEnteraDelMaximo) {
            masRepetidos.push(caracter);
        }
    }

    // Genera un índice aleatorio entre 0 y la longitud de la lista - 1
    let indiceAleatorio = Math.floor(Math.random() * masRepetidos.length);

    // Obtiene un elemento aleatorio usando el índice generado
    let elementoAleatorio = masRepetidos[indiceAleatorio];

    return elementoAleatorio;
}

module.exports = randomEntreMasRepetidos;