const obtenerVecinos = require('./obtenerVecinos');
const distanciaCadenaEnTexto = require('./distanciaCadenaEnTexto')

async function busquedaVecindad(cadena, texto) {

    try {
        let distanciaCadena = (await distanciaCadenaEnTexto(cadena, texto)).distancia_maxima;
        let vecindad = await obtenerVecinos(cadena, texto);
        let cadenaCandidata = vecindad.shift();

        while (vecindad.length > 0 && (await distanciaCadenaEnTexto(cadenaCandidata, texto)).distancia_maxima >= distanciaCadena) {
            // Obtener y eliminar el primer elemento del conjunto
            cadenaCandidata = vecindad.shift();
        }

        if ((await distanciaCadenaEnTexto(cadenaCandidata, texto)).distancia_maxima < distanciaCadena) {
            cadenaCandidata = await busquedaVecindad(cadenaCandidata, texto);
        } else {
            cadenaCandidata = cadena;
        }

        return cadenaCandidata;

    } catch (error) {
        console.error("Error durante la búsqueda de vecindad:", error);
        throw error;
    }
}

module.exports = busquedaVecindad;