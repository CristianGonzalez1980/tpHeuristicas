const obtenerVecinos = require('./obtenerVecinos');
const distanciaCadenaEnTexto = require('./distanciaCadenaEnTexto')

async function busquedaVecindad(cadena, texto) {

    try {
        let vecindad = await obtenerVecinos(cadena, texto);
        //console.log("Vecindad:", vecindad);
        let cadenaCandidata = vecindad.shift();

        while (vecindad.length > 0 && await distanciaCadenaEnTexto(cadenaCandidata, texto) >= await distanciaCadenaEnTexto(cadena, texto)) {
            cadenaCandidata = vecindad.shift(); // Obtener y eliminar el primer elemento del conjunto
            // console.log("Cadena candidata en vecindad:", cadenaCandidata);
        }

        if (await distanciaCadenaEnTexto(cadenaCandidata, texto) < await distanciaCadenaEnTexto(cadena, texto)) {
            console.log("Nueva vecindad de: " + cadenaCandidata + "con distancia: " + await distanciaCadenaEnTexto(cadenaCandidata, texto))
            cadenaCandidata = await busquedaVecindad(cadenaCandidata, texto);
        } else {
            cadenaCandidata = cadena;
        }

        return cadenaCandidata;

    } catch (error) {
        console.error("Error durante la búsqueda de vecindad:", error);
        throw error; // O maneja el error de la manera que consideres apropiada
    }
}

module.exports = busquedaVecindad;