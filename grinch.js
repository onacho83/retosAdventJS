let carta = "(a() bici (a)" // debería ser inválido

 function isValid(letter = '') {
    // ¡No dejes que el Grinch gane!
    let apertura = 0;
    let cierre = 0;
    for (let i = 0; i < letter.length; i++) {
        if(letter[i] == '(') apertura++;
        if(letter[i] == ')') cierre++;
    }

    if( cierre != apertura)return false;
    
    const indiceInicio = letter.indexOf('(');
    const indiceFinal = letter.lastIndexOf(')');
    let contenido = '';
   
    if(indiceFinal != -1){
         contenido = letter.substring(indiceInicio+1, indiceFinal);
    } else{
        return false;
    }
    console.log(contenido)
    console.log(contenido == '()')
    if( contenido == '()') return false;
    if(contenido.includes('[') || contenido.includes('{') || contenido == ''){
        return false;
    }

  

    return true
}


console.log(isValid(carta))