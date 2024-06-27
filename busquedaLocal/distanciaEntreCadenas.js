async function distanciaEntreCadenas(cadena1, cadena2) {

    try {
        let distancia = 0;

        for (let i = 0; i < cadena1.length; i++) {
            if (cadena1[i] != cadena2[i]) {
                distancia += 1;
            }
        }
        return Promise.resolve(distancia);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}
module.exports = distanciaEntreCadenas;