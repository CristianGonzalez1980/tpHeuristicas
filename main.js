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
//const filePath15 = './instancias/texto_mas_parecido_15_500_3.txt';  ultimo
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
//const filePath27 = './instancias/texto_mas_parecido_20_700_3.txt';

//const filePathb01 = './instancias2/instancias texto mas parecido_az_10_10_1.txt';
//const filePathb02 = './instancias2/instancias texto mas parecido_az_10_10_2.txt';
//const filePathb03 = './instancias2/instancias texto mas parecido_az_10_10_3.txt';
const filePathb04 = './instancias2/instancias texto mas parecido_az_10_20_1.txt';
//const filePathb05 = './instancias2/instancias texto mas parecido_az_10_20_2.txt';
//const filePathb06 = './instancias2/instancias texto mas parecido_az_10_20_3.txt';
//const filePathb07 = './instancias2/instancias texto mas parecido_az_10_30_1.txt';
//const filePathb08 = './instancias2/instancias texto mas parecido_az_10_30_2.txt';
//const filePathb09 = './instancias2/instancias texto mas parecido_az_10_30_3.txt';
//const filePathb10 = './instancias2/instancias texto mas parecido_az_15_10_1.txt';
//const filePathb11 = './instancias2/instancias texto mas parecido_az_15_10_2.txt';
//const filePathb12 = './instancias2/instancias texto mas parecido_az_15_10_3.txt';
//const filePathb13 = './instancias2/instancias texto mas parecido_az_15_20_1.txt';
//const filePathb14 = './instancias2/instancias texto mas parecido_az_15_20_2.txt';
//const filePathb15 = './instancias2/instancias texto mas parecido_az_15_20_3.txt';
//const filePathb16 = './instancias2/instancias texto mas parecido_az_15_30_1.txt';
//const filePathb17 = './instancias2/instancias texto mas parecido_az_15_30_2.txt';
//const filePathb18 = './instancias2/instancias texto mas parecido_az_15_30_3.txt';
//const filePathb19 = './instancias2/instancias texto mas parecido_az_20_10_1.txt';
//const filePathb20 = './instancias2/instancias texto mas parecido_az_20_10_2.txt';
//const filePathb21 = './instancias2/instancias texto mas parecido_az_20_10_3.txt';
//const filePathb22 = './instancias2/instancias texto mas parecido_az_20_20_1.txt';
//const filePathb23 = './instancias2/instancias texto mas parecido_az_20_20_2.txt';
//const filePathb24 = './instancias2/instancias texto mas parecido_az_20_20_3.txt';
//const filePathb25 = './instancias2/instancias texto mas parecido_az_20_30_1.txt';
//const filePathb26 = './instancias2/instancias texto mas parecido_az_20_30_2.txt';
//const filePathb27 = './instancias2/instancias texto mas parecido_az_20_30_3.txt';

const filePaths = [
    // filePathb01,/*
    /* filePathb02,
     filePathb03,*/
    filePathb04,/*
  //  filePathb05,
 //   filePathb06,
  //  filePathb07,
  //  filePathb08,
  //  filePathb09,
  //  filePathb10,
    filePathb11,
    filePathb12,
    filePathb13,
    filePathb14,
    filePathb15,
       filePathb16,
    filePathb17,
    filePathb18,
    filePathb19,
    filePathb20,
    filePathb21,
    filePathb22,
    filePathb23,
    filePathb24,
    filePathb25,
    filePathb26,
    filePathb27*/
]

async function procesarArchivo(filePath) {

    try {
        const datosIteracionesGrupo = new Map();

        for (let i = 0; i < 10; i++) {
            const texto = await leerArchivo(filePath);
            const incio = new Date().toLocaleTimeString();
            const resultado = await masParecido(texto);
            console.log(resultado.entries());

            const datosIteraciones = new Map();

            for (const [key, value] of resultado) {
                const nuevoObjeto = {
                    inicio_iteracion: incio,
                    final_iteracion: new Date().toLocaleTimeString(),
                    iteracion: value.iteracion,
                    distancia_incial: value.distancia_incial,
                    distancia_obtenida: value.distancia_obtenida
                };
                datosIteraciones.set(key, nuevoObjeto);
            }
            //console.log(datosIteraciones);
            datosIteracionesGrupo.set(filePath + ' ' + i, datosIteraciones)
            console.log(datosIteracionesGrupo);
        }
        await salidaParaAnalisis(/*filePath,*/datosIteracionesGrupo/*, incio*/);
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
for (let file of filePaths) {
    procesarArchivo(file, (error, textoProcesado) => { }); //para grasp
}
//const resultado = masParecido(texto); //para grasp
//console.log(resultado); //todos

