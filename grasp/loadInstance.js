const fs = require('fs');

function leerArchivo(filePath) {
    return new Promise((resolve, reject) => {

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject('Error reading the file:', err);
                return;
            }

            const lines = data.split('\n').filter(linea => linea.trim() !== '');

            console.log('cantidad de lineas: ' + lines.length + ' caracteres por linea: ' + lines[0].length);
            resolve(lines);
        });
    });
};

module.exports = leerArchivo;