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

        //function distanciaEntreVecinos(distancia_previa, caracter_previo, caracter_nuevo, posicion, cadena) {


        while (vecindad.length > 0 && (await distanciaCadenaEnTexto(cadenaCandidata, texto)).distancia_maxima >= distanciaCadena) {
            // Obtener y eliminar el primer elemento del conjunto
            registroVecino = vecindad.shift();
            cadenaCandidata = registroVecino.cadena_vecina;
            caracterAnterior = registroVecino.caracter_cambiado;
            caracterNuevo = registroVecino.caracter_nuevo;
            posicionCambiada = registroVecino.posicion;
            // console.log("Cadena candidata en vecindad:", cadenaCandidata);
        }

        if ((await distanciaCadenaEnTexto(cadenaCandidata, texto)).distancia_maxima < distanciaCadena) {
            console.log("Nueva vecindad de: " + cadenaCandidata + "con distancia: " + (await distanciaCadenaEnTexto(cadenaCandidata, texto)).distancia_maxima)
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