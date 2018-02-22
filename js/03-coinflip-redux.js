//Coin Flip Game Redux
    var coinFlip;
    
    for(var i=0; i<10; i++){
        coinFlip = Math.floor(Math.random() * 2);
        //console.log(coinFlip);
        if(coinFlip == 0){
           console.log('Heads');
        }else if(coinFlip == 1){
             console.log('Tails');
        }
    }