const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter='') {
    // ¡Tú puedes!
    
    let gifts = letter.trim()
    
    let gift = gifts.split(' ')

    gift = gift.filter(item=> {
       return !(item.includes('_'))
    })
    
    let lista = {};
    
    for (let i = 0; i < gift.length; i++) {
        if(!(gift[i] in lista)){
            console.log('se agrega')
            lista[gift[i]]=1;
            console.log({lista})
        }else{
            console.log('se incrementa')
            lista[gift[i]]+=1;
        }
        
    }


    return lista
   }


   const regalos = listGifts(carta)

   console.log(regalos)
   /*
   {
     bici: 2,
     coche: 2,
     balón: 1,
     peluche: 1
   }
   */