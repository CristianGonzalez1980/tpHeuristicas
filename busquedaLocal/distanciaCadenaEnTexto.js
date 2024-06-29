const distanciaEntreCadenas = require('./distanciaEntreCadenas');

async function distanciaCadenaEnTexto(cadena, texto) {

    try {
        let distanciaMaxima = 0;
        let pos = -1;
        let distanciasPorLinea = []

        for (let linea of texto) {
            let distanciaAEvaluar = await distanciaEntreCadenas(cadena, linea);
            pos = +1;
            distanciasPorLinea.push({linea: pos, distancia: distanciaAEvaluar})
            if (distanciaAEvaluar > distanciaMaxima) {
                distanciaMaxima = distanciaAEvaluar;
            }
        }
        return Promise.resolve({distancia_maxima: distanciaMaxima, distancias_por_linea: distanciasPorLinea});
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

module.exports = distanciaCadenaEnTexto;