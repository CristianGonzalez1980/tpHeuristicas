const obtenerVecinos = require('./obtenerVecinos');
const distanciaCadenaEnTexto = require('./distanciaCadenaEnTexto')
const distanciaEntreVecinos = require('./distanciaEntreVecinos')

async function busquedaVecindad(cadena, texto) {

    try {
        console.log("o")
        let distanciaCadena = await distanciaCadenaEnTexto(cadena, texto);
        let distanciaMaximaCadena = distanciaCadena.distancia_maxima
        let distanciasPorLineaCadena = distanciaCadena.distancias_por_linea
        let vecindad = await obtenerVecinos(cadena, texto);

        let registroVecino = vecindad.shift();
        let cadenaCandidata = registroVecino.cadena_vecina;
        let caracterAnterior = registroVecino.caracter_cambiado;
        let caracterNuevo = registroVecino.caracter_nuevo;
        let posicionCambiada = registroVecino.posicion;
        let distanciaCadenaVecina = distanciaEntreVecinos(distanciasPorLineaCadena, caracterAnterior, caracterNuevo, posicionCambiada, texto)
        let distanciaMaximaCadenaVecina = distanciaCadenaVecina.distancia_maxima

        console.log("1er intento vecindad distancia actual: " + distanciaMaximaCadena + "vecino candidato: " + distanciaMaximaCadenaVecina)
        //function distanciaEntreVecinos(distancia_previa, caracter_previo, caracter_nuevo, posicion, cadena) {


        while (vecindad.length > 0 && distanciaMaximaCadenaVecina >= distanciaMaximaCadena) {
            // Obtener y eliminar el primer elemento del conjunto
            registroVecino = vecindad.shift();
            cadenaCandidata = registroVecino.cadena_vecina;
            caracterAnterior = registroVecino.caracter_cambiado;
            caracterNuevo = registroVecino.caracter_nuevo;
            posicionCambiada = registroVecino.posicion;
            distanciaCadenaVecina = distanciaEntreVecinos(distanciasPorLineaCadena, caracterAnterior, caracterNuevo, posicionCambiada, texto)
            distanciaMaximaCadenaVecina = distanciaCadenaVecina.distancia_maxima
            console.log("distancia cadena: " + distanciaMaximaCadena + "distancia cadena vecina: " + distanciaMaximaCadenaVecina)
            // console.log("Cadena candidata en vecindad:", cadenaCandidata);
        }

        if (vecindad.length == 0 && distanciaMaximaCadenaVecina >= distanciaMaximaCadena) {
            //console.log("Nueva vecindad de: " + cadenaCandidata + "con distancia: " + distanciaMaximaCadenaVecina)
            console.log("Nueva vecindad de: " + distanciaMaximaCadena + "con distancia: " + distanciaMaximaCadenaVecina)
            //proximoVecino = await busquedaVecindad(cadenaCandidata, texto);
            //cadenaCandidata = proximoVecino;
            cadenaCandidata = cadena;
        }
        console.log("antes de salir distancia cadena: " + distanciaMaximaCadena + "distancia cadena vecina: " + distanciaMaximaCadenaVecina)
        return cadenaCandidata;

    } catch (error) {
        console.error("Error durante la búsqueda de vecindad:", error);
        throw error; // O maneja el error de la manera que consideres apropiada
    }
}

module.exports = busquedaVecindad;