const fs = require('fs');

function guardarResultado(cadena, distancia) {

    let conteo = new Date().toLocaleTimeString();;
    // Crea el contenido del archivo
    const content = `${cadena}\n${distancia}`;

    // Escribe el contenido en un archivo
    fs.writeFile('res_texto_mas_parecido_' + conteo + '.txt', content, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo', err);
        } else {
            console.log('Archivo escrito exitosamente');
        }
    })
};

module.exports = guardarResultado;