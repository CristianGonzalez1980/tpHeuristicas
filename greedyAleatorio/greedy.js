const randomEntreMasRepetidos = require('./randomEntreMasRepetidos');

function masParecido(texto) {

    let ocurrencias = new Map(); // Crea un mapa para las ocurrencias

    for (let linea of texto) {
        for (let i = 0; i < linea.length; i++) {
            //console.log(i)
            if (!ocurrencias.has(i)) {
                ocurrencias.set(i, []);
            }
            ocurrencias.get(i).push(linea[i]);
        }
    }

    let solucion = new Array(texto[0].length).fill('');

    for (let oc of ocurrencias.keys()) {
        // Llama a la función masRepetido con la lista de caracteres en el índice oc y asigna el resultado a solucion[oc]
        solucion[oc] = randomEntreMasRepetidos(ocurrencias.get(oc));
    }
    console.log('solucion greedyAleatorio: ' + solucion);
    
    return solucion.join('');
}


module.exports = masParecido;
