const busquedaVecindad = require('./busquedaVecindad');
const distanciaCadenaEnTexto = require('./distanciaCadenaEnTexto')

async function busquedaLocal(cadena, texto) {

    let cadenaCandidata = cadena;
    let distanciaParaImprimirActual = 0;
    let distanciaParaImprimirCandidata = 0;
    let cadenaActual; 


    do {
        cadenaActual = cadenaCandidata;
        cadenaCandidata = await busquedaVecindad(cadenaActual, texto);
        let distanciaActual = await distanciaCadenaEnTexto(cadenaActual, texto)
        let distanciaCandidata = await distanciaCadenaEnTexto(cadenaCandidata, texto)
        distanciaParaImprimirActual = distanciaActual.distancia_maxima
        distanciaParaImprimirCandidata = distanciaCandidata.distancia_maxima

        console.log("Cadena en busquedaLocal: " + cadenaActual + ", Distancia actual: " + distanciaParaImprimirActual)
        console.log("Cadena candidata en busquedaLocal: " + cadenaCandidata + ", Distancia actual: " + distanciaParaImprimirCandidata)
    } while (distanciaParaImprimirCandidata < distanciaParaImprimirActual && cadenaActual != cadenaCandidata);


    let distanciaHallada = await distanciaCadenaEnTexto(cadenaCandidata, texto)
    let distanciaImprimir = distanciaHallada.distancia_maxima
    console.log("salida busqueda Local: " + cadenaCandidata + ", distancia minima: " + distanciaImprimir)
    return cadenaCandidata;
}

module.exports = busquedaLocal;