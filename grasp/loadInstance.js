const fs = require('fs');

function leerArchivo(filePath) {
    return new Promise((resolve, reject) => {

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject('Error reading the file:', err);
                return;
            }

            const lines = data.split('\n').filter(linea => linea.trim() !== '');
            console.log('Entrada leida satisfactoriamente');
            resolve(lines);
        });
    });
};

module.exports = leerArchivo;