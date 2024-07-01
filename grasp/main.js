const masParecido = require('./grasp');
const leerArchivo = require('./loadInstance');
const guardarResultado = require('./writeOutput');

//instancias
const filePath01 = '../instancias/texto_mas_parecido_10_300_1.txt';
//const filePath02 = '../instancias/texto_mas_parecido_10_300_2.txt';  
//const filePath03 = '../instancias/texto_mas_parecido_10_300_3.txt';  
//const filePath04 = '../instancias/texto_mas_parecido_10_500_1.txt';  
//const filePath05 = '../instancias/texto_mas_parecido_10_500_2.txt';  
//const filePath06 = '../instancias/texto_mas_parecido_10_500_3.txt';  
//const filePath07 = '../instancias/texto_mas_parecido_10_700_1.txt';  
//const filePath08 = '../instancias/texto_mas_parecido_10_700_2.txt';  
//const filePath09 = '../instancias/texto_mas_parecido_10_700_3.txt';  
//const filePath10 = '../instancias/texto_mas_parecido_15_300_1.txt';
//const filePath11 = '../instancias/texto_mas_parecido_15_300_2.txt';  
//const filePath12 = '../instancias/texto_mas_parecido_15_300_3.txt';  
//const filePath13 = '../instancias/texto_mas_parecido_15_500_1.txt';  
//const filePath14 = '../instancias/texto_mas_parecido_15_500_2.txt';  
//const filePath15 = '../instancias/texto_mas_parecido_15_500_3.txt';
//const filePath16 = '../instancias/texto_mas_parecido_15_700_1.txt';  
//const filePath17 = '../instancias/texto_mas_parecido_15_700_2.txt';  
//const filePath18 = '../instancias/texto_mas_parecido_15_700_3.txt';  
//const filePath19 = '../instancias/texto_mas_parecido_20_300_1.txt';  
//const filePath20 = '../instancias/texto_mas_parecido_20_300_2.txt';  
//const filePath21 = '../instancias/texto_mas_parecido_20_300_3.txt';  
//const filePath22 = '../instancias/texto_mas_parecido_20_500_1.txt';  
//const filePath23 = '../instancias/texto_mas_parecido_20_500_2.txt';  
//const filePath24 = '../instancias/texto_mas_parecido_20_500_3.txt';  
//const filePath25 = '../instancias/texto_mas_parecido_20_700_1.txt';  
//const filePath26 = '../instancias/texto_mas_parecido_20_700_2.txt';
//const filePath27 = '../instancias/texto_mas_parecido_20_700_3.txt';

async function correrIteraciones(filePath) {

    try {
        const texto = await leerArchivo(filePath);
        const resultado = await masParecido(texto);

        await guardarResultado(resultado.cadena_resultante, resultado.distancia_minima)

    } catch (error) {
        console.error(error);
    }
}

correrIteraciones(filePath01, (error, textoProcesado) => { });

//para correr: node main.js