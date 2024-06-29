const busquedaVecindad = require('./busquedaVecindad');
const distanciaCadenaEnTexto = require('./distanciaCadenaEnTexto')

async function busquedaLocal(cadena, texto) {

    let cadenaCandidata = cadena;

    do {
        let cadena = cadenaCandidata;
        cadenaCandidata = await busquedaVecindad(cadena, texto);
        let distanciaParaImprimir = await distanciaCadenaEnTexto(cadenaCandidata, texto).distancia_maxima
        console.log("Cadena candidata en busquedaLocal: " + cadenaCandidata+", Distancia actual: " + distanciaParaImprimir)
    } while (await distanciaCadenaEnTexto(cadenaCandidata, texto).distancia_maxima > (await distanciaCadenaEnTexto(cadena, texto)).distancia_maxima && cadena != cadenaCandidata);

    
    let distanciaImprimir = await distanciaCadenaEnTexto(cadenaCandidata, texto).distancia_maxima
    console.log("salida busqueda Local: " + cadenaCandidata +", distancia minima: " + distanciaImprimir)
    return cadenaCandidata;
}

module.exports = busquedaLocal;