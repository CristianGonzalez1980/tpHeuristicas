function distanciaEntreVecinos(distancias_por_linea, caracter_previo, caracter_nuevo, posicion, texto) {

    let lineaPos = -1;
    let distanciasPorLinea = distancias_por_linea;
    let distanciaMaxima = 0;

    for (let linea of texto) {
        lineaPos = +1;
        const caracterEnCadena = linea[posicion];
        let distanciaLinea = distanciasPorLinea.get(lineaPos);

        if (caracterEnCadena === caracter_previo) {
            distanciasPorLinea.set(lineaPos, distanciaLinea + 1);
        } else if (caracterEnCadena === caracter_nuevo) {
            distanciasPorLinea.set(lineaPos, distanciaLinea - 1);
        }

        distanciaLinea = distanciasPorLinea.get(lineaPos);

        if (distanciaLinea > distanciaMaxima) {
            distanciaMaxima = distanciaLinea;
        }
    }

    return { distancia_maxima: distanciaMaxima, distancias_por_linea: distanciasPorLinea }
}

module.exports = distanciaEntreVecinos;