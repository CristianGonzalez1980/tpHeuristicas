const masRepetido = require('./masRepetido');
const alfabetoPorPosicion = require('./alfabetoPorPosicion')

function masParecido(texto) {

    let ocurrencias = alfabetoPorPosicion(texto); 
    let solucion = new Array(texto[0].length).fill('');

    for (let oc of ocurrencias.keys()) {
        // Llama a la función masRepetido con la lista de caracteres en el índice oc y asigna el resultado a solucion[oc]
        solucion[oc] = masRepetido(ocurrencias.get(oc));
    }

    return solucion.join('');
}

module.exports = masParecido;
