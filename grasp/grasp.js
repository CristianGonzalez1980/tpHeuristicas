const masParecidoGreedy = require('../greedyAleatorio/greedy');// 2.GREEDYALEATORIO
const masParecidoBusquedaLocal = require('../busquedaLocal/busquedaLocal');// 3.BUSQUEDALOCAL
const distanciaCadenaEnTexto = require('../busquedaLocal/distanciaCadenaEnTexto')

async function masParecido(texto) {

    const infoRes = new Map()
    const veces = 100;
    console.log('Ejecutando metaheuristica ...espere un momento');
    for (let i = 0; i < veces; i++) {

        let cadena = await masParecidoGreedy(texto);
        let cadenaCandidata = await masParecidoBusquedaLocal(cadena, texto);
        let distanciaObtenida = (await distanciaCadenaEnTexto(cadenaCandidata, texto)).distancia_maxima;

        infoRes.set(i, { distancia_obtenida: distanciaObtenida, cadena_resultante: cadenaCandidata })
    }
    //Me quedo con el restultado de la mejor iteracion
    let distanciaMinima = Infinity;
    let cadenaResultante = ''

    for (const res of infoRes.values()) {
        if (res.distancia_obtenida < distanciaMinima) {
            distanciaMinima = res.distancia_obtenida;
            cadenaResultante = res.cadena_resultante;
        }
    }

    return { distancia_minima: distanciaMinima, cadena_resultante: cadenaResultante };
}

module.exports = masParecido;