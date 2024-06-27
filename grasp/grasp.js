const masParecidoGreedy = require('../greedyAleatorio/greedy');// 2.GREEDYALEATORIO
const masParecidoBusquedaLocal = require('../busquedaLocal/busquedaLocal');// 3.BUSQUEDALOCAL
const distanciaCadenaEnTexto = require('../busquedaLocal/distanciaCadenaEnTexto')

async function masParecido(texto) {

    const infoRes = new Map()
    const veces = 50; // Número de veces que quieres repetir el código

    for (let i = 0; i < veces; i++) {
        // Bloque de código que quieres repetir
        console.log(`Esta es la iteración número ${i + 1}`);
        let cadena = await masParecidoGreedy(texto);
        let distanciaInicial = await distanciaCadenaEnTexto(cadena, texto);
        console.log('esta es la cadena resultante del greedy aleatorio: ' + cadena + "con distancia: " + distanciaInicial);
        let cadenaCandidata = await masParecidoBusquedaLocal(cadena, texto);
        let distanciaObtenida = await distanciaCadenaEnTexto(cadenaCandidata, texto);
        console.log('esta es la cadena resultante de la busqueda local: ' + cadenaCandidata + "con distancia: " + distanciaObtenida);

        infoRes.set(i, {iteracion: i, distancia_incial: distanciaInicial, distancia_obtenida: distanciaObtenida, cadena_resultante: cadenaCandidata})
    }
    console.log(infoRes.values())
    return "hola";
}


module.exports = masParecido;