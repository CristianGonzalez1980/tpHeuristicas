const alfabetoPorPosicion = require('../greedy/alfabetoPorPosicion');

function obtenerVecinos(cadena, texto) {

    return new Promise((resolve) => {
        /*
        Para cada uno de los m caracteres en el string de entrada, hay c−1 posibles cambios 
        (porque un carácter no puede cambiarse a sí mismo).
        
        La cantidad total de vecinos es:
    
        m × (c−1)
        */

        let candidatos = [];
        /*
        
        1. es un alfabeto restringido entre los caracteres posibles encontrados en el texto. 
        
        EJ. 
        
        TEXTO ["ABC","DBA","ADB"]
        ALFABETO ["ABCD"]
    
        2. es un alfabeto restringido entre los caracteres posibles encontrados en determinada posicion en las distintas lineas el texto.
        
        EJ. 
        
        TEXTO ["ABC","DBA","ADB"]
        ALFABETO POS 0 ["AD"]
        ALFABETO POS 1 ["BD"]
        ALFABETO POS 2 ["ABC"]
        
        3. es un alfabeto restringido entre los caracteres mas repetidos encontrados en determinada posicion en las distintas lineas el texto. 
        
        EJ. 
        
        TEXTO ["ABC","DBA","ADB","CBC","BCA","ACB","CCB"]
        ALFABETO POS 0 ["AC"]
        ALFABETO POS 1 ["BC"]
        ALFABETO POS 2 ["ABC"]
        
        */
        //console.log(texto);

        //let alfabeto = ['a', 'b', 'c'];
        let alfabeto = alfabetoPorPosicion(texto);

        for (let i = 0; i < cadena.length; i++) {
            for (let caracter of alfabeto.get(i)) {
                if (caracter !== cadena[i]) {
                    let vecino = cadena.slice(0, i) + caracter + cadena.slice(i + 1);
                    candidatos.push({ cadena_vecina: vecino, caracter_cambiado: cadena[i], caracter_nuevo: caracter, posicion: i });
                }
            }
        }
        resolve(candidatos);
    });
}

module.exports = obtenerVecinos;