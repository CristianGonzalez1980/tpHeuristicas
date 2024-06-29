function distanciaEntreVecinos(distancia_previa, caracter_previo, caracter_nuevo, posicion, cadena) {

    const caracter_en_cadena = cadena[posicion];

    if (caracter_en_cadena === caracter_previo) {
        return distancia_previa + 1;
    } else if (caracter_en_cadena === caracter_nuevo) {
        return distancia_previa - 1;
    } else {
        return distancia_previa;
    }
}

module.exports = distanciaEntreVecinos;