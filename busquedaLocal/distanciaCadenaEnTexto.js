const distanciaEntreCadenas = require('./distanciaEntreCadenas');

async function distanciaCadenaEnTexto(cadena, texto) {

    try {
        let distanciaMaxima = 0;
        let pos = 0;
        let distanciasPorLinea = new Map()

        for (let linea of texto) {
            let distanciaAEvaluar = await distanciaEntreCadenas(cadena, linea);
            distanciasPorLinea.set(pos, distanciaAEvaluar);
            pos = +1;
            if (distanciaAEvaluar > distanciaMaxima) {
                distanciaMaxima = distanciaAEvaluar;
            }
        }
        return Promise.resolve({ distancia_maxima: distanciaMaxima, distancias_por_linea: distanciasPorLinea });
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

module.exports = distanciaCadenaEnTexto;