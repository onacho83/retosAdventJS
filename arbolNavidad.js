

function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    const asterisco = '*';
    const guion = '_';


    let fila = ''

    let contGuion = height-1;
    let guionTallo = height-1;
    let contAsterisco = 1;

    while (height != 0) {



        for (let i = 0; i < contGuion; i++) {
            fila = fila + guion;
        }
        for (let i = 0; i < contAsterisco; i++) {
            fila = fila + asterisco;
        }
        for (let i = 0; i < contGuion; i++) {
            fila = fila + guion;
        }

        contAsterisco += 2;
        contGuion--;

        fila = fila + '\n'


        height--;

    }
    contGuion = height-1;
    final = false;
    for (let i = 0; i < 2; i++) {
        for (let i = 0; i < guionTallo; i++) {
            fila = fila + guion;
        }
        fila = fila + '#';

        for (let i = 0; i < guionTallo; i++) {
            fila = fila + guion;
        }
        if(!final)fila = fila + '\n';
        final = true;
    }


    return fila
}

console.log(createXmasTree(40))