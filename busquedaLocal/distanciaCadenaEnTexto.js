const distanciaEntreCadenas = require('./distanciaEntreCadenas');

async function distanciaCadenaEnTexto(cadena, texto) {

    try {
        let distanciaMaxima = 0;

        for (let linea of texto) {
            let distanciaAEvaluar = await distanciaEntreCadenas(cadena, linea);

            if (distanciaAEvaluar > distanciaMaxima) {
                distanciaMaxima = distanciaAEvaluar;
            }
        }
        return Promise.resolve(distanciaMaxima);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

module.exports = distanciaCadenaEnTexto;