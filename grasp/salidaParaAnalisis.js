const fs = require('fs');


function salidaParaAnalisis(titulo, datos) {

    const headers = ['Iteración', 'Distancia Inicial', 'Distancia Obtenida'];
    // Crea el Map con los datos

    const dataMap = new Map();

    for (const [key, value] of datos) {
        dataMap.set(key, [value.iteracion, value.distancia_incial, value.distancia_obtenida]);
    }

    // Función para formatear una fila con tabulaciones
    function formatRow(row) {
        return row.join('\t');
    }

    // Formatea las filas
    const headerRow = formatRow(headers);

    // Convierte el Map a un array de filas formateadas
    const dataRows = [];
    dataMap.forEach((value, key) => {
        const row = [...value]; // Incluye la iteración como la primera columna
        dataRows.push(formatRow(row));
    });

    const content = `${titulo}\n${headerRow}\n${dataRows.join('\n')}`;

    let conteo = new Date().toLocaleTimeString();;
    // Crea el contenido del archivo
    //const content = `${cadena}\n${distancia}`;

    // Escribe el contenido en un archivo
    fs.writeFile('analisis_' + conteo + '.txt', content, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo', err);
        } else {
            console.log('Archivo escrito exitosamente');
        }
    })
};

module.exports = salidaParaAnalisis;