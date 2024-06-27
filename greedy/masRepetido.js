function masRepetido(lineaDeTexto) {

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

    return caracterMasRepetido;
}

module.exports = masRepetido;