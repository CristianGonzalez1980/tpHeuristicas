const alfabetoPorPosicion = require('../greedy/alfabetoPorPosicion');

function obtenerVecinos(cadena, texto) {

    return new Promise((resolve) => {

        let candidatos = [];
        let alfabeto = alfabetoPorPosicion(texto);

        for (let i = 0; i < cadena.length; i++) {
            for (let caracter of alfabeto.get(i)) {
                if (caracter !== cadena[i]) {
                    let vecino = cadena.slice(0, i) + caracter + cadena.slice(i + 1);
                    candidatos.push({ cadena_vecina: vecino, caracter_cambiado: cadena[i], caracter_nuevo: caracter, posicion: i });
                }
            }
        }
        resolve(candidatos);
    });
}

module.exports = obtenerVecinos;