//const masParecido = require('./greedy/greedy');// 1.GREEDY
//const masParecido = require('./greedyAleatorio/greedy');// 2.GREEDYALEATORIO
//const masParecido = require('./busquedaLocal/busquedaLocal');// 3.BUSQUEDALOCAL
const masParecido = require('./grasp/grasp');// 5.GRASP
const leerArchivo = require('./grasp/loadInstance');// 5.GRASP
//const guardarResultado = require('./grasp/writeOutput');
const salidaParaAnalisis = require('./grasp/salidaParaAnalisis')
//const guardarResultado = require('./grasp/writeOutput');



//const filePath01 = './instancias/texto_mas_parecido_10_300_1.txt';  
//const filePath02 = './instancias/texto_mas_parecido_10_300_2.txt';  
//const filePath03 = './instancias/texto_mas_parecido_10_300_3.txt';  
//const filePath04 = './instancias/texto_mas_parecido_10_500_1.txt';  
//const filePath05 = './instancias/texto_mas_parecido_10_500_2.txt';  
//const filePath06 = './instancias/texto_mas_parecido_10_500_3.txt';  
//const filePath07 = './instancias/texto_mas_parecido_10_700_1.txt';  
//const filePath08 = './instancias/texto_mas_parecido_10_700_2.txt';  
//const filePath09 = './instancias/texto_mas_parecido_10_700_3.txt';  
//const filePath10 = './instancias/texto_mas_parecido_15_300_1.txt';  
//const filePath11 = './instancias/texto_mas_parecido_15_300_2.txt';  
//const filePath12 = './instancias/texto_mas_parecido_15_300_3.txt';  
//const filePath13 = './instancias/texto_mas_parecido_15_500_1.txt';  
//const filePath14 = './instancias/texto_mas_parecido_15_500_2.txt';  
//const filePath15 = './instancias/texto_mas_parecido_15_500_3.txt';  
//const filePath16 = './instancias/texto_mas_parecido_15_700_1.txt';  
//const filePath17 = './instancias/texto_mas_parecido_15_700_2.txt';  
//const filePath18 = './instancias/texto_mas_parecido_15_700_3.txt';  
//const filePath19 = './instancias/texto_mas_parecido_20_300_1.txt';  
//const filePath20 = './instancias/texto_mas_parecido_20_300_2.txt';  
//const filePath21 = './instancias/texto_mas_parecido_20_300_3.txt';  
//const filePath22 = './instancias/texto_mas_parecido_20_500_1.txt';  
//const filePath23 = './instancias/texto_mas_parecido_20_500_2.txt';  
//const filePath24 = './instancias/texto_mas_parecido_20_500_3.txt';  
//const filePath25 = './instancias/texto_mas_parecido_20_700_1.txt';  
//const filePath26 = './instancias/texto_mas_parecido_20_700_2.txt';  
const filePath27 = './instancias/texto_mas_parecido_20_700_3.txt';

async function procesarArchivo(filePath) {
    try {
        const texto = await leerArchivo(filePath);
        const resultado = await masParecido(texto);
        console.log(resultado.entries());

        const datosIteraciones = new Map();

        for (const [key, value] of resultado) {
          const nuevoObjeto = {
            iteracion: value.iteracion,
            distancia_incial: value.distancia_incial,
            distancia_obtenida: value.distancia_obtenida
          };
          datosIteraciones.set(key, nuevoObjeto);
        }
        
        console.log(datosIteraciones);

        await salidaParaAnalisis(filePath, datosIteraciones);

        /*
        //me quedo con el restultado de la mejor iteracion
        let distanciaMinima = Infinity;
        let cadenaResultante = ''

        for (let [iter, res] of resultado.entries()) {
            if (res.distancia_obtenida < distanciaMinima) {
                distanciaMinima = res.distancia_obtenida;
                cadenaResultante = res.cadena_resultante;
            }
        }

        await guardarResultado(cadenaResultante, distanciaMinima)
        */

        return texto;
        // Aquí puedes realizar otras operaciones con las líneas obtenidas
    } catch (error) {
        console.error(error);
    }
}
//GRASP

/*
const texto = [
    "abbac",
    "bbaac",
    "cbaab",
    "abcaa",
    "acccc",
    "bcacb"
];
*/
//const resultado = masParecido(texto); //para algoritmo greedy
//const resultado = masParecido("abaca", texto); //para algoritmo de busqueda local
procesarArchivo(filePath27, (error, textoProcesado) => { }); //para grasp
//const resultado = masParecido(texto); //para grasp
//console.log(resultado); //todos

