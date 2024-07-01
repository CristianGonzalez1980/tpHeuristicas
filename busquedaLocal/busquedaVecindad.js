const obtenerVecinos = require('./obtenerVecinos');
const distanciaCadenaEnTexto = require('./distanciaCadenaEnTexto')

async function busquedaVecindad(cadena, texto) {

    try {
        let distanciaCadena = (await distanciaCadenaEnTexto(cadena, texto)).distancia_maxima;
        let vecindad = await obtenerVecinos(cadena, texto);

        let registroVecino = vecindad.shift();
        let cadenaCandidata = registroVecino.cadena_vecina;
        let caracterAnterior = registroVecino.caracter_cambiado;
        let caracterNuevo = registroVecino.caracter_nuevo;
        let posicionCambiada = registroVecino.posicion;

        while (vecindad.length > 0 && (await distanciaCadenaEnTexto(cadenaCandidata, texto)).distancia_maxima >= distanciaCadena) {
            // Obtener y eliminar el primer elemento del conjunto
            registroVecino = vecindad.shift();
            cadenaCandidata = registroVecino.cadena_vecina;
            caracterAnterior = registroVecino.caracter_cambiado;
            caracterNuevo = registroVecino.caracter_nuevo;
            posicionCambiada = registroVecino.posicion;
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