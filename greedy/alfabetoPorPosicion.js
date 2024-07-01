function alfabetoPorPosicion(texto) {
    //retorna un map donde cada key se asocia a la lista de los caracteres que aparecen en dicha posicion en al menos una linea del texto. 

    let ocurrencias = new Map();

    for (let linea of texto) {
        for (let i = 0; i < linea.length; i++) {
            if (!ocurrencias.has(i)) {
                ocurrencias.set(i, []);
            }
            ocurrencias.get(i).push(linea[i]);
        }
    }
    return ocurrencias;
}

module.exports = alfabetoPorPosicion;