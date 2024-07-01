const busquedaVecindad = require('./busquedaVecindad');
const distanciaCadenaEnTexto = require('./distanciaCadenaEnTexto')

async function busquedaLocal(cadena, texto) {

    let cadenaCandidata = cadena;

    do {
        let cadena = cadenaCandidata;
        cadenaCandidata = await busquedaVecindad(cadena, texto);
    } while (await distanciaCadenaEnTexto(cadenaCandidata, texto).distancia_maxima > (await distanciaCadenaEnTexto(cadena, texto)).distancia_maxima && cadena != cadenaCandidata);

    return cadenaCandidata;
}

module.exports = busquedaLocal;